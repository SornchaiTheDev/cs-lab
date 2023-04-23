import { fakeLabs } from '@/__mock__'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'
import Item from './Item'
import { useOnClickOutside } from 'usehooks-ts'

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true)
    const sidebarRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(sidebarRef, () => setIsOpen(false))
    return (
        <motion.div
            ref={sidebarRef}
            animate={{ left: isOpen ? 0 : -345 }}
            transition={{ duration: 0.4 }}
            className="fixed left-0 z-30 h-full mt-16 bg-white border-r dark:bg-primary-1 dark:border-secondary-1"
        >
            <div className="relative h-full">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute bg-white dark:bg-primary-1 dark:border-secondary-1 border-r border-t border-b rounded-r-full bottom-24 -right-[2.3rem] p-2 text-xl dark:text-ascent-1"
                >
                    {isOpen ? <BsArrowBarLeft /> : <BsArrowBarRight />}
                </button>
                <div className="p-4">
                    {fakeLabs[0].problems.map(({ name, status }, i) => (
                        <Item
                            key={name}
                            name={name}
                            status={status}
                            active={i === 0}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar
