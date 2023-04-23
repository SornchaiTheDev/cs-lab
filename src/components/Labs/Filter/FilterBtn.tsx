import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    text: string
    isSelected: boolean
    onClick: () => void
}

const FilterBtn = ({ text, isSelected, onClick }: Props) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            onClick={onClick}
            className={clsx(
                'rounded-full px-4 py-1 border-2',
                'border-gray-900 dark:border-ascent-1 ',
                'dark:text-ascent-1',
                isSelected
                    ? 'dark:bg-ascent-1 bg-gray-900 text-white dark:text-[#171819]'
                    : 'text-gray-900'
            )}
        >
            <p>{text}</p>
        </motion.button>
    )
}

export default FilterBtn
