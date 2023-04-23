import Link from 'next/link'
import Problem from '@/interface/Problem'
import { useRouter } from 'next/router'
import Badge from '@/components/Common/Badge'
import { smartTitle } from '@/utils'
import Status from '../Class/Status'
import { motion } from 'framer-motion'

interface Props {
    title: string
    isClosed: boolean
    problems: Problem[]
    id: string
    type: string
}

function Card({ title, isClosed, problems, id, type }: Props) {
    const router = useRouter()
    const success = problems.filter(({ status }) => status == 'success').length
    const isLesson = type === 'LS'
    const hrefTo = isLesson
        ? `${router.asPath}/lesson/${id}/01`
        : `${router.asPath}/problem/${id}`

    return (
        <Link href={hrefTo} legacyBehavior>
            <motion.a
                initial={{ y: 10, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                className="col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer"
            >
                <div className="rounded-lg border bg-white dark:bg-secondary-1 dark:border-secondary-2  w-full h-full px-6 py-4 shadow-lg flex justify-end flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                        {isClosed && <Badge title="อ่านอย่างเดียว" />}
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-ascent-1">
                            {smartTitle(title)}
                        </h3>

                        <Status items={problems.map(({ status }) => status)} />
                    </div>
                </div>
            </motion.a>
        </Link>
    )
}

export default Card
