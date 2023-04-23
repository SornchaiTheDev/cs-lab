import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import jwt from 'jsonwebtoken'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const token = await getToken({
        req,
        secret: process.env.SECRET,
    })

    console.log(jwt.sign(token!, process.env.NEXTAUTH_SECRET!))

    res.status(200).json({ name: 'John Doe' })
}
