import { LabStatus } from '@/interface/LabStatus'
import clsx from 'clsx'
interface Props {
    items: LabStatus[]
}
function Status({ items }: Props) {
    const successLab = items.filter((status) => status == 'success').length
    const allLab = items.length

    if (allLab === 0) return null
    return (
        <div className="flex flex-col gap-2">
            <div
                className="w-full grid  gap-1 place-items-stretch"
                style={{ gridTemplateColumns: `repeat(${allLab} , 1fr)` }}
            >
                {items.map((status, index) => {
                    return (
                        <div
                            key={index}
                            className={clsx(
                                'h-2',
                                status === 'success'
                                    ? 'bg-lime-500 dark:bg-green-1'
                                    : status === 'failed'
                                    ? 'bg-red-500 dark:bg-red-1'
                                    : 'bg-gray-200',
                                'rounded-full'
                            )}
                        ></div>
                    )
                })}
            </div>
            <h6 className="font-bold text-md dark:text-ascent-1">
                {successLab}/{allLab}
            </h6>
        </div>
    )
}

export default Status
