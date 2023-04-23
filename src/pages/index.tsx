import React from 'react'
import type { NextApiRequest, NextPage, NextPageContext } from 'next'
import Class from '@/components/Class'
import { fakeLabs, classes } from '@/__mock__'
import WithNavbar from '@/HOC/WithNavbar'
import { getToken } from 'next-auth/jwt'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { StudentInfo } from '@/interface/StudentInfo'
import { AnimatePresence } from 'framer-motion'
import { trpc } from '@/utils/trpc'

interface Props {
    data: StudentInfo | null
}

const Home: NextPage<Props> = ({ data }) => {
    const hello = trpc.hello.useQuery()

    return (
        <WithNavbar title="Class | CS-LAB">
            <div className="container w-full px-4 py-10 mx-auto">
                <div>
                    <h2 className="text-2xl font-bold dark:text-white">
                        คลาสเรียน
                    </h2>
                    <div className="grid w-full grid-cols-12 gap-4 mt-4">
                        <AnimatePresence>
                            {data?.resData?.map((item) => (
                                <Class
                                    key={item.fkSubjectId}
                                    title={item.subject.name}
                                    code={item.fkSubjectId}
                                    section={item.section.sectionId}
                                    labs={fakeLabs as any}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </WithNavbar>
    )
}

export default Home

export async function getServerSideProps(context: NextPageContext) {
    const res: StudentInfo = { resCode: '200', resData: classes, msg: '' }
    return { props: { data: res } }
    // try {
    //     const { req } = context
    //     const token = await getToken({
    //         req: req as NextApiRequest,
    //         secret: process.env.SECRET,
    //     })

    //     const { data } = await axios.get<StudentInfo>(
    //         process.env.API_BASE_URL + '/classroom/studentInfo',
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${jwt.sign(
    //                     token!,
    //                     process.env.SECRET!
    //                 )}`,
    //             },
    //         }
    //     )

    //     return {
    //         props: { data },
    //     }
    // } catch (error) {
    //     return { props: { data: null } }
    // }
}
