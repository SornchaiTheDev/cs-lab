import { HiArrowLongLeft } from 'react-icons/hi2'
import { useRouter } from 'next/router'

interface Props {
    className?: string
}
const BackArrow = ({ className }: Props) => {
    const { back } = useRouter()
    return (
        <button
            onClick={back}
            className={`group inline-flex items-center gap-2 ${className} text-slate-700 dark:text-ascent-1 hover:opacity-70 w-fit`}
        >
            <HiArrowLongLeft
                size="1.45rem"
                className="group-hover:translate-x-1 duration-300"
            />
            <h4>ย้อนกลับ</h4>
        </button>
    )
}

export default BackArrow
