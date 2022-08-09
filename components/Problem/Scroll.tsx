import { useRef, useState, useEffect, MouseEvent } from 'react'
import { useRecoilState } from 'recoil'
import { problemState } from '@store/ProblemState'
import { BsThreeDotsVertical } from 'react-icons/bs'
function Scroll() {
    const scroll = useRef<HTMLDivElement | null>(null)
    const [isDrag, setIsDrag] = useRecoilState(problemState)

    const handleOnMouseDown = () => setIsDrag(true)

    return (
        <div
            ref={scroll}
            className="hidden md:flex w-4 h-full border-x-2 bg-gray-50  flex-col justify-center items-center cursor-ew-resize"
            onMouseDown={handleOnMouseDown}
            onTouchStart={handleOnMouseDown}
        >
            <BsThreeDotsVertical />
        </div>
    )
}

export default Scroll