import React from 'react'
import Section from '../Section'

interface Props {
    code: string
    section: number
}

function Banner({ code, section }: Props) {
    return (
        <div className="px-4 pt-6 pb-4 min-h-min h-36 md:h-48  bg-gradient-to-l from-[#28313B] to-[#485461] rounded-xl shadow flex flex-col justify-end">
            <div>
                <Section code={code} section={section} />

                <h3 className="font-bold text-2xl md:text-3xl mt-2 text-white">
                    Fundamental Programming Concepts
                </h3>
            </div>
        </div>
    )
}

export default Banner
