interface BadgeProps {
    title: string
    className?: string
}

function Badge({ title, className = '' }: BadgeProps) {
    return (
        <div
            className={`rounded-full px-2 py-1 bg-red-200 dark:bg-[#FF708A]/50 w-fit ${className}`}
        >
            <p className="text-sm font-bold text-red-500 dark:text-[#FFDEDF]">
                {title}
            </p>
        </div>
    )
}

export default Badge
