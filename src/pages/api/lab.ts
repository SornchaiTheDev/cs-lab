import type { NextApiRequest, NextApiResponse } from 'next'
import { outline } from '@/__mock__/problem'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(outline)
}
