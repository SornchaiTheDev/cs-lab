// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import jwt from 'jsonwebtoken'

interface Inputdate {
    classId: string
    labId: string
    problem_slug: string
    code: string
}

export interface Token {
    name: string
    email: string
    picture: string
    sub: string
    iat: number
    exp: number
    jti: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const token = (await getToken({
        req,
        secret: process.env.SECRET,
    })) as unknown as Token

    // const { labId, problem_slug, code, classId } = req.body as Inputdate

    if (!token) {
        return res.status(401).json({
            statusCode: 401,
            message: 'Unauthorized',
        })
    }

    if (Date.now() >= token.exp * 1000) {
        return res.status(401).json({
            statusCode: 401,
            message: 'Token expired',
        })
    }

    // try {
    //     let res = await axios.post(
    //         `${process.env.API_BASE_URL}/submit`,
    //         {
    //             ...req.body,
    //         },
    //         {
    //             headers: {
    //                 token: jwt.sign(token, process.env.SECRET!),
    //             },
    //         }
    //     )
    // } catch (error: any) {
    //     return res.status(500).json({
    //         statusCode: 500,
    //         message: error.message,
    //     })
    // }

    res.status(200).json({ name: jwt.sign(token, process.env.SECRET!) })
}
