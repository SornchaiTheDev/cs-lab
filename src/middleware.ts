import { withAuth } from 'next-auth/middleware'

export default withAuth({
    pages: {
        signIn: '/login',
        error: '/login',
    },
    callbacks: {
        authorized({ req, token }) {
            // `/admin` requires admin role
            // if (req.nextUrl.pathname === '/admin') {
            //     return token?.userRole === 'user'
            // }
            // // `/me` only requires the user to be logged in
            return true
            // return !!token
        },
    },
})
