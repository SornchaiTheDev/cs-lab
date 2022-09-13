import Link from 'next/link'
import Problem from '@/interface/Problem'
import { useRouter } from 'next/router'
import Badge from '@/components/Common/Badge'
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
        <Link href={hrefTo}>
            <a className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="rounded-lg border-[1px] bg-white border-gray-50 w-full h-full px-6 py-4 shadow-lg shadow-gray-200 flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                        {isClosed && (
                            <Badge title="อ่านอย่างเดียว" color="red" />
                        )}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900">{title}</h3>

                    <div className="flex flex-col gap-2">
                        <div className="w-full grid grid-cols-8 gap-1 place-items-stretch">
                            {problems.map(({ name, status }) => (
                                <div
                                    key={name}
                                    className={`h-2 ${
                                        status == 'success'
                                            ? 'bg-lime-500'
                                            : status == 'failed'
                                            ? 'bg-red-500'
                                            : 'bg-gray-200'
                                    }  rounded-full`}
                                ></div>
                            ))}
                        </div>
                        <h6 className="font-bold text-md">
                            {success}/{problems.length}
                        </h6>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Card
