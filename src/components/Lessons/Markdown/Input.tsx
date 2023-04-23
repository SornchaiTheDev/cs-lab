import { ChangeEvent } from 'react'
import clsx from 'clsx'
import { IoCheckmarkSharp, IoClose } from 'react-icons/io5'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { updateProblem } from '@/store/slices/lessonSlice'

interface InputProps {
    ans: string
    id: string
}

function Input({ id }: InputProps) {
    const { problems } = useAppSelector((state) => state.lesson)
    const problem = problems.find((problem) => problem.id === id)
    const { answer, status } = problem!

    const dispatch = useAppDispatch()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const answer = e.target.value
        dispatch(updateProblem({ id, answer }))
    }

    return (
        <div className={clsx('flex items-center gap-2 w-full')}>
            <div
                className={clsx(
                    status === 'not-attempted' && 'hidden',
                    status === 'success' && 'md:text-lime-500',
                    status === 'failed' && 'text-red-500',
                    'text-2xl'
                )}
            >
                {status === 'success' ? <IoCheckmarkSharp /> : <IoClose />}
            </div>
            <input
                className={clsx(
                    'rounded-md p-2 bg-white dark:bg-secondary-2/20 dark:border-secondary-2/10 border outline-none focus:dark:outline-slate-300 w-full',
                    status === 'not-attempted' && 'border-gray-200',
                    status === 'success' && 'border-lime-500',
                    status === 'failed' && 'border-red-500'
                )}
                value={answer as string}
                type="text"
                onChange={handleChange}
            />
        </div>
    )
}

export default Input
