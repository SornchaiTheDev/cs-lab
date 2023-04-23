import { ReactNode, useState, useEffect } from 'react'
import ReactTooltip from 'react-tooltip'

interface Props {
    icon: ReactNode
    onClick: () => void
    tooltip?: string
}

function Button({ icon, onClick, tooltip }: Props) {
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    return (
        <>
            {isMounted && (
                <ReactTooltip
                    place="bottom"
                    type="dark"
                    effect="solid"
                    delayShow={500}
                />
            )}

            <button
                data-tip={tooltip}
                className="m-2 px-10 py-2 rounded-lg border-gray-200 dark:border-[#706E6E] hover:bg-zinc-100 dark:hover:bg-secondary-1 transition-all duration-50 text-gray-800 dark:text-ascent-1"
                onClick={onClick}
            >
                {icon}
            </button>
        </>
    )
}

export default Button
