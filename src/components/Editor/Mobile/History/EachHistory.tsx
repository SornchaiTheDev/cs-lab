import { useEffect } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { format } from 'date-fns'
import th from 'date-fns/locale/th'
import Testcase from '../../Testcase'
import CodeMirror from '../../../Common/CodeMirror'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import { materialDarkCode } from '@/themes'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setCode } from '@/store/slices/editorSlice'
import { setMenu } from '@/store/slices/mobileMenuSlice'

function EachHistory() {
    const { selected } = useAppSelector((state) => state.history)
    const dispatch = useAppDispatch()
    const itemDate = new Date(selected!.date || '')

    const handleOnCopy = () => {
        dispatch(setCode(selected!.code))
        dispatch(setMenu('code'))
    }

    return (
        <div className="flex-1 flex flex-col gap-4 dark:text-ascent-1">
            <div className="flex justify-between">
                <div>
                    <div>
                        <h4 className="text-md font-bold">
                            ส่งเมื่อวันที่{' '}
                            {format(itemDate, 'dd MMM yyyy', {
                                locale: th,
                            })}
                        </h4>
                        <div className="flex items-center gap-1">
                            <AiOutlineClockCircle />
                            <h4 className="text-sm">
                                เวลา {format(itemDate, 'HH:mm')} น.
                            </h4>
                        </div>
                    </div>
                    <Testcase status={selected?.status || []} />
                </div>

                <button
                    onClick={handleOnCopy}
                    className="h-fit bg-yellow-400 dark:bg-[#E2BD44] border-b-4 active:border-b-2  transition-all duration-50 border-yellow-500 dark:border-[#C19834] text-yellow-800 dark:text-[#7D4F1F] py-2 px-4 rounded-lg flex items-center gap-1 "
                >
                    <HiOutlineClipboardCopy />
                    คัดลอก
                </button>
            </div>
            <div className="rounded-md overflow-hidden h-full mb-4 border dark:border-secondary-2">
                <CodeMirror
                    readonly
                    height="100%"
                    value={selected ? selected.code : ''}
                />
            </div>
        </div>
    )
}

export default EachHistory
