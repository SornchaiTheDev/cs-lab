import { useState, useCallback } from 'react'
import axios from 'axios'

interface Props {
    code: string
    input?: string
}

function useCodeRun({ code, input = '' }: Props) {
    const [runningStatus, setRunningStatus] = useState<
        'running' | 'error' | 'idle' | 'success'
    >('idle')
    const [isError, setIsError] = useState(false)
    const [output, setOutput] = useState<string>('')

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

            if (data.run.code === 1) setIsError(true)

            setRunningStatus('idle')
            setOutput(data.run.output)
        } catch (err) {}
    }, [code, input])

    return { handleRun, runningStatus, isError, output }
}

export default useCodeRun
