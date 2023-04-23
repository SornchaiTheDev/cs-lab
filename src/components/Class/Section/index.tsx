import React from 'react'

interface SectionI {
    code: string
    section: number
}

function Section({ code, section }: SectionI) {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <div className="rounded-full px-2 py-1 bg-gray-100 dark:bg-[#6C727F] w-fit">
                <p className="text-sm text-gray-500 dark:text-gray-100 font-bold">
                    {code.toUpperCase()}
                </p>
            </div>
            <div className="rounded-full px-2 py-1 bg-gray-100 dark:bg-[#6C727F] w-fit">
                <p className="text-sm text-gray-500 dark:text-gray-100 font-bold">
                    หมู่ {section}
                </p>
            </div>
        </div>
    )
}

export default Section
