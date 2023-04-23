import { ReactNode, useRef } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from 'react-icons/io5'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { toggleHamburger } from '@/store/slices/menuSlice'
import { useOnClickOutside } from 'usehooks-ts'
interface Props {
    children?: ReactNode
}
function Hamburger({ children }: Props) {
    const overlayRef = useRef<HTMLDivElement>(null)
    const isHamburgerOpen = useAppSelector(
        (state) => state.menu.isHamburgerOpen
    )

    const dispatch = useAppDispatch()

    useOnClickOutside(overlayRef, () => dispatch(toggleHamburger()))

    return (
        <div className="md:hidden transition duration-1000">
            <button onClick={() => dispatch(toggleHamburger())}>
                <RxHamburgerMenu size={28} className="dark:text-white" />
            </button>

            {isHamburgerOpen ? (
                <div className="fixed z-50 top-0 left-0  w-full h-full bg-black bg-opacity-40">
                    <div
                        ref={overlayRef}
                        className="w-9/12 h-full bg-white dark:bg-primary-1 flex flex-col"
                    >
                        <button
                            onClick={() => dispatch(toggleHamburger())}
                            className="w-full p-4 border-b border-gray-200 dark:border-secondary-2 flex justify-end items-center"
                        >
                            <IoClose size={26} className="dark:text-white" />
                        </button>
                        <div className="h-full overflow-y-scroll">
                            {children}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Hamburger
