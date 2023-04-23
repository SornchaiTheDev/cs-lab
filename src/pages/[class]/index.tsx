import { useState } from 'react'
import Card from '@/components/Labs/Card'
import BackArrow from '@/components/Common/BackArrow'
import WithNavbar from '@/HOC/WithNavbar'
import { StudentInfo } from '@/interface/StudentInfo'
import axios from 'axios'
import { NextPageContext, NextApiRequest } from 'next'
import { getToken } from 'next-auth/jwt'
import jwt from 'jsonwebtoken'
import { GetLabs } from '@/interface/GetLabs'
import Section from '@/components/Class/Section'
import Filter from '@/components/Labs/Filter'
import { AnimatePresence } from "framer-motion"

interface Props {
    data: GetLabs | null
}

const Class: React.FC<Props> = ({ data }) => {
    const [Data, setData] = useState<GetLabs | null>(data)
    const [show, setShow] = useState<showType>(0)

    return (
        <WithNavbar title="Fundamental Programming Concepts | CS-LAB">
            <div className="container mx-auto w-full md:max-w-6xl px-4 pb-10">
                <BackArrow className="my-6" />
                <Banner
                    code={Data?.resData[0].fkSubjectId!}
                    section={Data?.resData[0].sectionId!}
                />
                <Filter show={show} setShow={setShow} />

                <div
                    className="grid grid-cols-12 gap-4 place-items-stretch"
                    style={{ gridAutoRows: '1fr' }}
                >
                    <AnimatePresence key={show}>
                        {Data?.resData
                            .filter(
                                ({ status }) => status == show || show === 0
                            )
                            .map(
                                (
                                    { labId, name, status, type, problems },
                                    id
                                ) => (
                                    <Card
                                        key={id}
                                        type={type}
                                        id={labId}
                                        title={name}
                                        problems={problems}
                                        isClosed={status === 2}
                                    />
                                )
                            )}
                    </AnimatePresence>
                </div>
            </div>
        </WithNavbar>
    )
}

export default Class

import { fakeLabs } from '@/__mock__'
import { showType } from '@/interface/LabType'
import Banner from '@/components/Class/Banner'

export async function getServerSideProps(context: NextPageContext) {
    const res: GetLabs = {
        resCode: '200',
        resData: fakeLabs,
        msg: '',
    }
    return { props: { data: res } }
    try {
        const { req } = context
        const token = await getToken({
            req: req as NextApiRequest,
            secret: process.env.SECRET,
        })

        const { data } = await axios.post<StudentInfo>(
            process.env.API_BASE_URL + '/classroom/getLabs',
            {
                subjectId: context.query.class,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwt.sign(
                        token!,
                        process.env.SECRET!
                    )}`,
                },
            }
        )

        return {
            props: { data },
        }
    } catch (error) {
        return { props: { data: null } }
    }
}
