import axios from 'axios'
import NextAuth, { Account, NextAuthOptions, Profile } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import jwt from 'jsonwebtoken'
import { io } from 'socket.io-client'
import { prisma } from '@/server/db'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],

    pages: {
        error: '/login',
    },
    callbacks: {
        async signIn({ account, profile }) {
            if (account && account.provider === 'google') {
                if (
                    profile &&
                    //@ts-ignore
                    profile.email_verified &&
                    //@ts-ignore
                    profile.email.endsWith('@ku.th')
                ) {
                    const res = await prisma.emailAccess.findUnique({
                        where: {
                            email: profile.email,
                        },
                    })

                    if (!res) {
                        throw new Error('you are not allow to access this site')
                    }

                    //check if user is in the database
                    const user = await prisma.user.findUnique({
                        where: {
                            email: profile.email,
                        },
                    })

                    if (!user) {
                        //if not create user
                        await prisma.user.create({
                            data: {
                                email: profile.email!,
                                sections: {},
                            },
                        })
                    }

                    return true
                } else {
                    throw new Error('not-authorize')
                }
            }
            throw new Error('Sign in provider not supported')
        },
        async jwt({ token, account, isNewUser, profile, user }) {
            console.log(user)

            return {
                ...token,
                ...user
            }
        },
        async session({ session, user, token }) {
            session.user = token
            return session
        },
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
})
