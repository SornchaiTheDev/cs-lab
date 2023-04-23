import { useState, useEffect, useCallback, RefObject } from 'react'

function useDrag(
    ref: RefObject<HTMLDivElement>,
    defaultWidth: number = 0,
    dimension: 'width' | 'height' = 'width'
) {
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const [size, setSize] = useState<number>(defaultWidth)
    const parentSize =
        dimension === 'width'
            ? ref.current?.getBoundingClientRect().left!
            : ref.current?.clientHeight!
    const client = dimension === 'width' ? 'clientX' : 'clientY'
    const onUp = () => setIsDrag(false)

    const onMouseDrag = useCallback(
        (e: MouseEvent) => {
            setSize(Math.abs(parentSize - e[client]))
        },
        [setSize, parentSize, client]
    )

    const touchDragging = useCallback(
        (e: TouchEvent) => {
            setSize(Math.abs(parentSize - e.touches[0][client]))
        },
        [setSize, parentSize, client]
    )
    useEffect(() => {
        if (isDrag) {
            document.addEventListener('mousemove', onMouseDrag)
            document.addEventListener('touchend', onUp)
            document.addEventListener('touchmove', touchDragging)
            document.addEventListener('mouseup', onUp)
        }
        return () => {
            document.removeEventListener('mousemove', onMouseDrag)
            document.removeEventListener('touchend', onUp)
            document.removeEventListener('mouseup', onUp)
            document.removeEventListener('touchmove', touchDragging)
        }
    }, [onMouseDrag, touchDragging, isDrag])

    return { size, setIsDrag }
}

export default useDrag
