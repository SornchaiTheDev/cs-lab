import { useState } from 'react'
import CodeMirror from '@/components/Common/CodeMirror'
import { EditorState } from '@codemirror/state'
import { BsPlay } from 'react-icons/bs'
import { BiLoaderCircle } from 'react-icons/bi'
import clsx from 'clsx'
import { IoCheckmarkSharp, IoClose } from 'react-icons/io5'
import type { LabStatus } from '@/interface/LabStatus'
import { getReadOnlyRanges } from './utils'
import useCodeRun from '@/hooks/useCodeRun'

interface Props {
    id: string
    readOnlyRanges: Array<{ line: number; from: number; to: number }>
    isReadOnly: boolean
    value: string
    onChange: (value: string) => void
    run: string
    status: LabStatus
    isRunningPoint: boolean
    isHasInput: boolean
}

function Code({
    id,
    readOnlyRanges = [],
    isReadOnly,
    value,
    onChange,
    run,
    status,
    isRunningPoint,
    isHasInput,
}: Props) {
    const [input, setInput] = useState<string>('')
    const { handleRun, isError, output, runningStatus } = useCodeRun({
        code: run,
        input,
    })
    const IS_SUCCESS = status === 'success'
    const IS_FAILED = status === 'failed'
    const IS_ERROR = status === 'failed' || isError
    const IS_RUNNING = runningStatus === 'running'
    const IS_IDLING = runningStatus === 'idle'
    const IS_NOT_ATTEMPT = status === 'not-attempted'
    const IS_HAS_OUTPUT = output.length > 0
    const IS_NEED_INPUT = isHasInput

    return (
        <div className="flex items-start gap-2 w-full my-2" id={id}>
            <div className="flex items-center gap-2">
                <span
                    className={clsx(
                        'text-xl min-w-[20px]',
                        IS_SUCCESS && 'text-lime-500',
                        IS_FAILED && 'text-red-500'
                    )}
                >
                    {IS_SUCCESS && <IoCheckmarkSharp />}
                    {IS_FAILED && <IoClose />}
                </span>
                {isRunningPoint ? (
                    <button
                        onClick={handleRun}
                        className={clsx(
                            'rounded-full w-8 h-8 flex justify-center items-center  border-b-2 active:border-b transition-all duration-50 ',
                            IS_IDLING &&
                                'bg-lime-400 dark:bg-lime-700 border-lime-700 dark:border-lime-700',
                            IS_RUNNING &&
                                'bg-yellow-400 dark:bg-yellow-700 border-yellow-700 dark:border-yellow-700',
                            IS_ERROR &&
                                'bg-red-400 dark:bg-red-700 border-red-700 dark:border-red-700'
                        )}
                    >
                        {IS_RUNNING && (
                            <BiLoaderCircle
                                size="1.25rem"
                                className={clsx(
                                    'animate-spin duration-500 text-yellow-800 dark:text-yellow-400'
                                )}
                            />
                        )}
                        {IS_IDLING && (
                            <BsPlay
                                size="1.25rem"
                                className={clsx(
                                    IS_IDLING &&
                                        'text-lime-800 dark:text-lime-400',
                                    IS_ERROR && 'text-red-800 dark:text-red-400'
                                )}
                            />
                        )}
                    </button>
                ) : (
                    <span className="ml-8"></span>
                )}
            </div>
            <div
                className={clsx(
                    'flex-1 rounded-xl flex flex-col overflow-hidden shadow-md border-2 z-20  bg-white dark:bg-[#2f2f2f]',
                    IS_SUCCESS && 'border-lime-500',
                    IS_ERROR && 'border-red-500 dark:border-red-700',
                    IS_NOT_ATTEMPT && 'border-[#dddd] dark:border-transparent'
                )}
            >
                <CodeMirror
                    customFontSize={18}
                    variant="lesson"
                    value={value}
                    onChange={onChange}
                    height="100%"
                    readonly={isReadOnly}
                    readOnlyRanges={(targetState: EditorState) =>
                        getReadOnlyRanges(targetState, readOnlyRanges)
                    }
                />
                {IS_HAS_OUTPUT && (
                    <div className="w-full h-fit mt-2 min-h-[2rem] not-prose border-t dark:border-zinc-500 p-2 text-gray-900 dark:text-ascent-1">
                        <pre>{output}</pre>
                    </div>
                )}

                {IS_NEED_INPUT && (
                    <div className="border-t p-2 not-prose">
                        <h4 className="uppercase">Input</h4>
                        <CodeMirror
                            customFontSize={18}
                            value={input}
                            variant="lesson"
                            onChange={(v) => setInput(v)}
                            height="100%"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Code
