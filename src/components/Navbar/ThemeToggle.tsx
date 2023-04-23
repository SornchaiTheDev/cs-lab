import clsx from 'clsx'
import React from 'react'
import { BiMoon } from 'react-icons/bi'
import { HiOutlineSun } from 'react-icons/hi'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setTheme } from '@/store/slices/userSettingsSlice'

function ThemeToggle() {
    const dispatch = useAppDispatch()
    const { theme } = useAppSelector((state) => state.userSettings)

    const isDarkMode = theme === 'dark'

    const handleOnThemeChange = () => {
        const html = document.querySelector('html')

        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))

        if (html) {
            html.classList.toggle('dark')
        }
    }
    return (
        <button
            onClick={handleOnThemeChange}
            className="hover:light:bg-gray-100 py-3 dark:text-white hover:bg-ascent-1/20 rounded-lg p-2 flex justify-between items-center w-full"
        >
            <h5>Dark Mode</h5>
            <div className="flex w-12 h-6 rounded-full bg-gray-200 dark:bg-secondary-2 border relative group">
                <div
                    className={clsx(
                        'absolute top-1/2 -translate-y-1/2 left-1 transition-transform duration-300 w-4 h-4 rounded-full bg-white flex justify-center items-center',
                        isDarkMode && 'translate-x-[1.4rem]'
                    )}
                >
                    {isDarkMode ? (
                        <BiMoon size="90%" color="black" />
                    ) : (
                        <HiOutlineSun size="90%" color="black" />
                    )}
                </div>
            </div>
        </button>
    )
}

export default ThemeToggle
