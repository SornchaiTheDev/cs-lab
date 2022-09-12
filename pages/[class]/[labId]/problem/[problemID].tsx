import {
    createRef,
    MouseEvent,
    TouchEvent,
    useEffect,
    useCallback,
} from 'react'
import WithNavbar from '@/HOC/WithNavbar'
import Editor from '@/components/Problem/Editor'
import Scroll from '@/components/Problem/Scroll'
import Leftpanel from '@/components/Problem/Leftpanel'
import Settings from '@/components/Problem/Settings'
import { useProblemContext } from '@/Context/Problem'

function Problem() {
    const body = createRef<HTMLDivElement>()
    const { isDrag, setIsDrag, setScrollSize, isSettings } = useProblemContext()

    const handleOnMouseMove = (e: MouseEvent) => {
        if (isDrag && e.pageX < 768) setScrollSize(e.pageX)
    }

    const handleOnTouchMove = (e: TouchEvent) => {
        if (isDrag && e.touches[0].pageX < 600)
            setScrollSize(e.touches[0].pageX)
    }

    const handleOnMouseUp = useCallback(() => {
        setIsDrag(false)
    }, [setIsDrag])

    useEffect(() => {
        document.addEventListener('mouseup', handleOnMouseUp)
        document.addEventListener('touchend', handleOnMouseUp)

        return () => {
            document.removeEventListener('mouseup', handleOnMouseUp)
            document.removeEventListener('touchend', handleOnMouseUp)
        }
    }, [handleOnMouseUp])

    return (
        <WithNavbar
            ref={body}
            title="09 Find a, b in which a*b=n and (a+b) is the lowest - CS-LAB"
        >
            {isSettings && <Settings />}
            <div
                className="flex flex-col md:flex-row min-h-0 max-h-full flex-1 h-full"
                onMouseMove={handleOnMouseMove}
                onTouchMove={handleOnTouchMove}
            >
                <Leftpanel />
                <Scroll />
                <Editor />
            </div>
        </WithNavbar>
    )
}

export default Problem