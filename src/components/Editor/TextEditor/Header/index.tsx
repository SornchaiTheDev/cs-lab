import { useEffect, useState } from 'react'
import SaveStatus from './SaveStatus'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { openBottomBar, setBottomBarTab } from '@/store/slices/menuSlice'
import { setOutput } from '@/store/slices/editorSlice'
import { BsCheck2All, BsTerminal } from 'react-icons/bs'
import axios from 'axios'
import { BiLoaderCircle } from 'react-icons/bi'
import clsx from 'clsx'

interface Props {
    onRun?: () => void
}
function Header({ onRun }: Props) {
    const [saveStatus, setsaveStatus] = useState<'saving' | 'saved'>('saved')
    const [status, setStatus] = useState<'running' | 'error' | 'idle'>('idle')
    const { code, input } = useAppSelector((state) => state.editor)
    const dispatch = useAppDispatch()
    const handleOnRun = async () => {
        if (!!onRun) onRun()
        dispatch(openBottomBar())
        dispatch(setBottomBarTab('output'))
        dispatch(setOutput(''))

        try {
            setStatus('running')
            const { data } = await axios.post(
                'https://api-lab.peerawitp.me/api/v2/execute',
                {
                    language: 'python',
                    version: '3.10.0',
                    files: [
                        {
                            content: code,
                        },
                    ],
                    stdin: input,
                    args: [],
                    compile_timeout: 1000,
                    run_timeout: 3000,
                    compile_memory_limit: -1,
                    run_memory_limit: -1,
                }
            )
            setStatus('idle')
            dispatch(setOutput(data.run.output))
        } catch (err) {}
    }

    useEffect(() => {
        if (saveStatus === 'saving') {
            setTimeout(() => {
                setsaveStatus('saved')
            }, 1000)
        }
    }, [saveStatus])
    return (
        <div className="border-b dark:border-secondary-2 py-2 px-4 flex justify-between">
            <SaveStatus status={saveStatus} />
            <div className="flex items-center gap-2">
                <button
                    onClick={handleOnRun}
                    className="bg-lime-400 dark:bg-[#A7D456] border-b-4 active:border-b-2 transition-all duration-50 border-lime-500 dark:border-[#79A139] text-lime-800 dark:text-[#476021]  py-2 px-4 rounded-lg flex items-center gap-1"
                >
                    {status === 'running' && (
                        <BiLoaderCircle
                            size="1.25rem"
                            className={clsx('animate-spin duration-500')}
                        />
                    )}
                    {status === 'idle' && <BsTerminal />}
                    {status === 'idle'
                        ? 'Run'
                        : status === 'running' && 'Running'}
                </button>

                <button className="bg-yellow-400 dark:bg-[#E2BD44] border-b-4 active:border-b-2  transition-all duration-50 border-yellow-500 dark:border-[#C19834] text-yellow-800 dark:text-[#7D4F1F] py-2 px-4 rounded-lg flex items-center gap-1 ">
                    <BsCheck2All />
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Header
