import React, { useEffect, useRef, useState } from 'react'
import Item from '@/components/Lessons/Outline/Item'
import { fakeLabs } from '@/__mock__'
import { motion } from 'framer-motion'
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'
import clsx from 'clsx'

function Navigation() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <motion.div
            animate={{
                width: isOpen ? 300 : 50,
            }}
            transition={{ duration: 0.3 }}
            className="mr-4 min-w-[300px] w-[300px] h-full bg-white dark:bg-secondary-1 border dark:border-secondary-2 rounded-xl overflow-hidden flex flex-col justify-between"
        >
            <div className="h-full p-2 overflow-y-auto">
                <motion.div
                    animate={{ display: isOpen ? 'block' : 'none' }}
                    transition={{ delay: isOpen ? 0.3 : 0 }}
                >
                    {fakeLabs[0].problems.map(({ name, status }, i) => (
                        <Item
                            key={name}
                            name={name}
                            status={status}
                            active={i === 0}
                        />
                    ))}
                </motion.div>
            </div>

            <motion.div
                layout
                transition={{ delay: isOpen ? 0 : 0.3 }}
                animate={{
                    justifyContent: isOpen ? 'end' : 'center',
                }}
                className="flex w-full p-2 border-t dark:border-secondary-2"
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={clsx(
                        'text-xl border dark:border-secondary-2 p-2 rounded-xl dark:text-ascent-1'
                    )}
                >
                    {isOpen ? <BsArrowBarLeft /> : <BsArrowBarRight />}
                </button>
            </motion.div>
        </motion.div>
    )
}

export default Navigation
