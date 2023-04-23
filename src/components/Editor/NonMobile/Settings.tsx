import { useRef } from 'react'
import InputRange from '../TextEditor/InputRange'
import { IoClose, IoSettingsOutline } from 'react-icons/io5'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { useOnClickOutside } from 'usehooks-ts'
import { toggleSettings } from '@/store/slices/menuSlice'
import { setFontSize, setTabSize } from '@/store/slices/userSettingsSlice'

function Settings() {
    const settingsWindow = useRef<HTMLDivElement>(null)
    const { fontSize, tabSize } = useAppSelector((state) => state.userSettings)
    const dispatch = useAppDispatch()

    useOnClickOutside(settingsWindow, () => dispatch(toggleSettings()))

    return (
        <div className="fixed w-full h-full bg-black bg-opacity-25 backdrop-blur-sm z-40 flex items-center justify-center">
            <div
                ref={settingsWindow}
                className="bg-white dark:bg-secondary-1 border dark:border-secondary-2 rounded-lg py-4 flex flex-col w-1/3 px-4"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 dark:text-ascent-1">
                        <IoSettingsOutline size="1.5rem" />
                        <h2 className="text-xl font-semibold">การตั้งค่า</h2>
                    </div>
                    <button
                        onClick={() => dispatch(toggleSettings())}
                        className="self-end p-4 dark:text-ascent-1"
                    >
                        <IoClose size="1.25rem" />
                    </button>
                </div>

                <h4 className="text-md my-2 dark:text-ascent-1">
                    ขนาดตัวอักษร
                </h4>

                <InputRange
                    value={fontSize}
                    onChange={(value) => dispatch(setFontSize(value))}
                    step={2}
                />

                <h4 className="text-md my-2 dark:text-ascent-1">ขนาด Tab</h4>
                <InputRange
                    value={tabSize}
                    onChange={(value) => dispatch(setTabSize(value))}
                />
            </div>
        </div>
    )
}

export default Settings
