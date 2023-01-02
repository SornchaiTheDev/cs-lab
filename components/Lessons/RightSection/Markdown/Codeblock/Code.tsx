import { useState, useEffect, useCallback } from 'react'
import CodeMirror from '@/components/Editor/CodeMirror'
import { EditorState } from '@codemirror/state'
import { BsPlay } from 'react-icons/bs'
import { BiLoaderCircle } from 'react-icons/bi'
import axios from 'axios'
import clsx from 'clsx'
import { IoCheckmarkSharp, IoClose } from 'react-icons/io5'
import type { LabStatus } from '@/interface/LabStatus'

interface Props {
    id: string
    source: string
    readOnlyRanges: Array<{ line: number; from: number; to: number }>
    readOnly: boolean
    value: string
    onChange: (value: string) => void
    run: string
    status: LabStatus
}

const getReadOnlyRanges = (
    targetState: EditorState,
    readOnlyRanges: Array<{ line: number; from: number; to: number }>
): Array<{ from: number; to: number }> => {
    const ranges = readOnlyRanges.map((range, id) => {
        const { line, from, to } = range

        const lineStart = targetState.doc.line(line).from
        const lineEnd = targetState.doc.line(line).to

        return {
            from: from < 0 ? lineEnd + from : lineStart + from,
            to: to < 1 ? lineEnd + to : lineStart + to,
        }
    })

    return ranges
}

function Code({
    id,
    source,
    readOnlyRanges = [],
    readOnly,
    value,
    onChange,
    run,
    status,
}: Props) {
    const [runningStatus, setRunningStatus] = useState<
        'running' | 'error' | 'idle' | 'success'
    >('idle')
    const [isError, setIsError] = useState(false)
    const [output, setOutput] = useState<string>('')
    const IS_SUCCESS = status === 'success'
    const IS_FAILED = status === 'failed'
    const IS_ERROR = status === 'failed' || isError
    const IS_RUNNING = runningStatus === 'running'
    const IS_IDLING = runningStatus === 'idle'
    const IS_NOT_ATTEMPT = status === 'not-attempted'
    const IS_HAS_OUTPUT = output.length > 0

    const handleRun = useCallback(async () => {
        try {
            setRunningStatus('running')

            const { data } = await axios.post(
                'https://api-lab.peerawitp.me/api/v2/execute',
                {
                    language: 'python',
                    version: '3.5.10',
                    files: [
                        {
                            content: run,
                        },
                    ],
                    // stdin: 'chokun',
                    args: [],
                    compile_timeout: 1000,
                    run_timeout: 3000,
                    compile_memory_limit: -1,
                    run_memory_limit: -1,
                }
            )
            if (data.run.code === 1) setIsError(true)

            setRunningStatus('idle')
            setOutput(data.run.output)
        } catch (err) {}
    }, [run])

    const handleShortcut = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                console.log(id)
                handleRun()
            }
        },
        [handleRun, id]
    )

    useEffect(() => {
        const block = document.getElementById(id)
        if (block) {
            block.addEventListener('keydown', handleShortcut)
        }
        return () => block?.removeEventListener('keydown', handleShortcut)
    }, [handleShortcut, id])

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
                                IS_IDLING && 'text-lime-800 dark:text-lime-400',
                                IS_ERROR && 'text-red-800 dark:text-red-400'
                            )}
                        />
                    )}
                </button>
            </div>
            <div
                className={clsx(
                    'flex-1 rounded-xl flex flex-col overflow-hidden shadow-md border-2  bg-white dark:bg-[#2f2f2f]',
                    IS_SUCCESS && 'border-lime-500',
                    IS_ERROR && 'border-red-500 dark:border-red-700',
                    IS_NOT_ATTEMPT && 'border-[#dddd] dark:border-transparent'
                )}
            >
                <CodeMirror
                    customFontSize={18}
                    variant="lesson"
                    initialDoc={source}
                    value={value}
                    onChange={onChange}
                    height="100%"
                    readonly={readOnly}
                    readOnlyRanges={(targetState: EditorState) =>
                        getReadOnlyRanges(targetState, readOnlyRanges)
                    }
                />
                {IS_HAS_OUTPUT && (
                    <div className="w-full h-fit mt-2 min-h-[2rem] not-prose border-t dark:border-zinc-500 p-2 text-gray-900 dark:text-ascent-1">
                        <pre>{output}</pre>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Code
