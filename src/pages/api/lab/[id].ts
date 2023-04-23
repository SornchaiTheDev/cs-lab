import { NextApiRequest, NextApiResponse } from 'next'
import { fakeLabs } from '@/__mock__'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    const lab = fakeLabs.find(({ labId }) => labId === id)
    res.status(200).json(lab)
}
