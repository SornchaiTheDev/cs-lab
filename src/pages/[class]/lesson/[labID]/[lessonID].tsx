import { GetServerSideProps } from 'next'
import WithNavbar from '@/HOC/WithNavbar'
import Markdown from '@/components/Lessons/Markdown'
import { serialize } from 'next-mdx-remote/serialize'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { OutlineI } from '@/interface/Outline'
import Hamburger from '@/components/Lessons/Outline/Hamburger'
import path from 'path'
import BackArrow from '@/components/Common/BackArrow'
import Badge from '@/components/Common/Badge'
import Footer from '@/components/Lessons/Footer'
import Sidebar from '@/components/Lessons/Outline/Sidebar'

interface Props {
    metadata: {
        outline: OutlineI[]
    }
    content: string
    answers: string[]
    isClosed: boolean
    title: string
}

function LabID({ metadata, content, answers, isClosed, title }: Props) {
    return (
        <WithNavbar
            hamburgerChild={<Hamburger outline={[]} />}
            title="CS Python Lab 01 Input Process Output | CS LAB"
        >
            <Sidebar />
            <div className="flex justify-center gap-10 p-4">
                <div className="w-full md:w-2/3 2xl:w-1/2 md:px-10 md:mt-10">
                    <BackArrow />

                    <div className="mt-4 mb-6">
                        {isClosed && (
                            <Badge title="อ่านอย่างเดียว" className="my-3" />
                        )}
                        <h4 className="text-lime-600">{title}</h4>
                        <h2 className="text-2xl font-bold md:text-3xl dark:text-ascent-1">
                            การใช้งาน While loop
                        </h2>
                    </div>
                    <Markdown labMD={content} />
                    <Footer />
                </div>
            </div>
        </WithNavbar>
    )
}

export default LabID

export async function getServerSideProps(ctx: GetServerSideProps) {
    const fetchedAns: string[] = []
    const mdxPath = path.join(process.cwd(), '/src/__mock__/MDX/lesson02.mdx')
    const file = readFileSync(mdxPath, 'utf8')
    const { data: metadata, content } = matter(file)
    const mdxSource = await serialize(content)

    return {
        props: {
            title: 'CS Python Lab 05 While Loop',
            metadata,
            content: mdxSource,
            answers: fetchedAns,
            isClosed: true,
        },
    }
}
