import clsx from 'clsx'

interface Props {
    title: string
    active?: boolean
    onClick: () => void
}

function Button({ title, active, onClick }: Props) {
    return (
        <button onClick={onClick} className="cursor-pointer select-none w-fit">
            <div
                className={clsx(
                    'py-2 px-6  dark:border-ascent-1 flex items-center gap-1 hover:bg-zinc-300 dark:hover:bg-zinc-700',
                    active && 'bg-zinc-200 dark:bg-zinc-600'
                )}
            >
                <h4
                    className={clsx(
                        'text-sm font-medium uppercase',
                        active
                            ? 'text-zinc-700 dark:text-ascent-1'
                            : 'text-zinc-500 dark:text-zinc-400'
                    )}
                >
                    {title}
                </h4>
            </div>
        </button>
    )
}

export default Button
