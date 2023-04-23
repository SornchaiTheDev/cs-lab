import { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useRef } from 'react'
import { FaHistory } from 'react-icons/fa'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import { useOnClickOutside } from 'usehooks-ts'
import HistoryItems from './HistoryItem'
import CodeMirror from '../../Common/CodeMirror'
import { initialDoc } from '@/__mock__/initialDoc'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setCode } from '@/store/slices/editorSlice'
import { toggleHistory } from '@/store/slices/menuSlice'
import { setHistory, setSelected } from '@/store/slices/historySlice'
import { materialDarkCode } from '@/themes'

function History() {
    const selected = useAppSelector((state) => state.history.selected)
    const allHistory = useAppSelector((state) => state.history.allHistory)
    const dispatch = useAppDispatch()

    const historyWindow = useRef<HTMLDivElement>(null)
    const closeBtnRef = useRef<HTMLDivElement>(null)
    const bottomRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(historyWindow, () => dispatch(toggleHistory()))

    const handleCopy = () => {
        if (!selected) return
        dispatch(setCode(selected.code))
        dispatch(toggleHistory())
    }

    useEffect(() => {
        dispatch(
            setHistory([
                {
                    code: initialDoc,
                    date: new Date('November 16, 2565 11:12:00').getTime(),
                    status: ['P', 'P', 'P', 'S', 'C', 'P', 'P'],
                },
                {
                    code: 'Hello World',
                    date: new Date('November 16, 2565 11:12:01').getTime(),
                    status: ['P', 'P', 'P', 'S', 'C', 'P', 'P'],
                },
            ])
        )
        dispatch(
            setSelected({
                code: initialDoc,
                date: new Date('November 16, 2565 11:12:00').getTime(),
                status: ['P', 'P', 'P', 'S', 'C', 'P', 'P'],
            })
        )
    }, [])

    return (
        <div className="fixed w-full h-full bg-black bg-opacity-25 backdrop-blur-sm z-40 flex items-center justify-center">
            <div
                ref={historyWindow}
                className="bg-white dark:bg-secondary-1 border dark:border-secondary-2 w-5/6 h-5/6 rounded-lg overflow-hidden grid grid-cols-8 auto-rows-fr"
            >
                <div className="col-span-2 border-r dark:border-secondary-2 p-4">
                    <div className="flex items-center gap-2 dark:text-ascent-1">
                        <FaHistory />
                        <h4 className="text-xl font-semibold">ประวัติการส่ง</h4>
                    </div>
                    <div className="flex flex-col gap-2 mt-3">
                        <HistoryItems allHistory={allHistory} />
                    </div>
                </div>

                <div ref={closeBtnRef} className="col-span-6 flex flex-col">
                    <button
                        onClick={() => dispatch(toggleHistory())}
                        className="self-end p-4 dark:text-ascent-1"
                    >
                        <IoClose size="1.25rem" />
                    </button>
                    <div className="flex-1 overflow-y-scroll">
                        <CodeMirror
                            value={selected ? selected.code : ''}
                            height="100%"
                            readonly
                        />
                    </div>
                    <div
                        ref={bottomRef}
                        className="bg-gray-50 dark:bg-secondary-1/70 border-t dark:border-secondary-2 flex justify-end p-2"
                    >
                        <button
                            onClick={handleCopy}
                            className="bg-yellow-400 dark:bg-[#E2BD44] border-b-4 active:border-b-2  transition-all duration-50 border-yellow-500 dark:border-[#C19834] text-yellow-800 dark:text-[#7D4F1F] py-2 px-4 rounded-lg flex items-center gap-1 "
                        >
                            <HiOutlineClipboardCopy />
                            คัดลอก
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History
