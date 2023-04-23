import { useRef, useState, useEffect } from 'react'
import useDrag from '@/hooks/useDrag'
import Description from '../Description'
import Badge from '@/components/Common/Badge'

function LeftPanel() {
    const [windowWidth, setWindowWidth] = useState<number>(320)
    const leftPanelRef = useRef<HTMLDivElement>(null)
    const { size, setIsDrag } = useDrag(leftPanelRef, windowWidth, 'width')

    useEffect(() => {
        if (size >= 320) setWindowWidth(size + 10)
    }, [size])

    const onDoubleClick = () => {
        setWindowWidth(320)
    }

    return (
        <div
            ref={leftPanelRef}
            className="flex justify-between"
            style={{
                minWidth: 320,
                width: windowWidth,
                maxWidth: 'max-content',
            }}
        >
            <div className="w-full p-4 overflow-hidden overflow-y-scroll bg-white border dark:bg-secondary-1 dark:border-secondary-2 rounded-xl">
                <div className="break-words">
                    <Badge title="อ่านอย่างเดียว" />
                    <h4 className="mt-2 text-lime-600">
                        CS Python Lab 01 Problems
                    </h4>
                </div>
                <Description />
            </div>

            {/* Tab Resize */}

            <div
                className="flex items-center justify-center flex-shrink-0 w-6 h-full group dark:bg-primary-1 cursor-col-resize"
                onTouchStart={() => setIsDrag(true)}
                onMouseDown={() => setIsDrag(true)}
                onDoubleClick={onDoubleClick}
            >
                <span className="w-1/5 h-10 transition-all bg-gray-500 rounded-full group-hover:h-16"></span>
            </div>
        </div>
    )
}

export default LeftPanel
