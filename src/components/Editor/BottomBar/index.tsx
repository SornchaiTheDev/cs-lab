import { RefObject, useEffect, useState } from 'react'
import useDrag from '@/hooks/useDrag'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setBottomBarTab } from '@/store/slices/menuSlice'
import Navigation from './Navigation'
import Output from './Output'
import Input from './Input'

interface WindowI {
    zoneRef: RefObject<HTMLDivElement>
}

function Window({ zoneRef }: WindowI) {
    const [windowHeight, setWindowHeight] = useState<number>(200)
    const { size, setIsDrag } = useDrag(zoneRef, windowHeight, 'height')
    const { isBottomBarOpen, bottomBarTab } = useAppSelector(
        (state) => state.menu
    )
    const dispatch = useAppDispatch()

    useEffect(() => {
        setWindowHeight(size + 83)
    }, [size])

    if (!isBottomBarOpen) return null
    return (
        <>
            <div
                className="group w-full h-8 dark:bg-primary-1 cursor-row-resize flex items-center justify-center "
                style={{ minHeight: '2rem' }}
                onTouchStart={() => setIsDrag(true)}
                onMouseDown={() => setIsDrag(true)}
                onDoubleClick={() => setWindowHeight(200)}
            >
                <span className="h-1/6 rounded-full w-10 bg-gray-500 group-hover:w-16 transition-all"></span>
            </div>
            <div
                className="bg-white dark:bg-secondary-1 border dark:border-secondary-2 w-full flex flex-col rounded-xl overflow-hidden"
                style={{
                    minHeight: 183,
                    maxHeight: '100%',
                    height: windowHeight,
                }}
            >
                <Navigation
                    active={bottomBarTab}
                    onClick={(tab) => dispatch(setBottomBarTab(tab))}
                />
                {bottomBarTab === 'input' && <Input />}
                {bottomBarTab === 'output' && <Output />}
            </div>
        </>
    )
}

export default Window
