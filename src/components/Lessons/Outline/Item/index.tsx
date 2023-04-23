import clsx from 'clsx'
import { useRouter } from 'next/router'
import { IoCheckmark, IoClose } from 'react-icons/io5'

const Item = ({
    name,
    status,
    active,
}: {
    name: string
    status: 'success' | 'failed' | 'none'
    active: boolean
}) => {
    const router = useRouter()

    return (
        <button
            className={clsx(
                'w-full grid grid-cols-12 border mb-2 items-center hover:bg-gray-100 dark:hover:bg-[#464646] dark:text-ascent-1 p-2 rounded-xl',
                active && 'bg-gray-100 dark:bg-[#464646]'
            )}
        >
            <h4 className="col-span-11 text-start">{name}</h4>
            {status === 'success' ? (
                <IoCheckmark className="col-span-1 text-lime-500 dark:text-green-1 text-2xl" />
            ) : null}
            {status === 'failed' ? (
                <IoClose className="col-span-1 text-red-500 dark:text-red-1 text-2xl" />
            ) : null}
        </button>
    )
}

export default Item
