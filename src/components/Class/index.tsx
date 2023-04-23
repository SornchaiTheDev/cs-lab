import Link from 'next/link'
import Lab from '@/interface/Lab'
import Section from '@/components/Class/Section'
import Status from './Status'
import { motion } from 'framer-motion'

interface Props {
    title: string
    code: string
    section: number
    labs: Lab[]
}

function Class({ title, code, section, labs }: Props) {
    const problems = labs.map((lab) => {
        const isSuccess = lab.problems.every(
            (problem) => problem.status == 'success'
        )
        const isFailed = lab.problems.some(
            (problem) => problem.status == 'failed'
        )
        if (isSuccess) return 'success'
        if (isFailed) return 'failed'
        return 'not-attempted'
    })

    return (
        <Link href={`/${code}`} legacyBehavior>
            <motion.a
                initial={{ y: 10, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                className="col-span-12 md:col-span-6 xl:col-span-4 cursor-pointer"
            >
                <div className="rounded-lg border dark:border-secondary-2 bg-white dark:bg-secondary-1 w-full h-full px-6 py-4 shadow-lg flex justify-end flex-col gap-3">
                    <Section code={code} section={section} />
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                        {title}
                    </h3>
                    <Status items={problems} />
                </div>
            </motion.a>
        </Link>
    );
}

export default Class
