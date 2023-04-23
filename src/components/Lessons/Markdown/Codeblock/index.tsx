import Code from './Code'
import { useState } from 'react'
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { updateProblem } from '@/store/slices/lessonSlice'
import type { LessonQuizI } from '@/interface/LessonQuiz'
interface EachCodeBlock {
    id: string
    source: string
    readOnlyRanges: Array<{ line: number; from: number; to: number }>
    readOnly: boolean
    canRun: boolean
    isHasInput: boolean
}
interface Props {
    id: string
    sources: EachCodeBlock[]
}
function CodeBlock({ id, sources }: Props) {
    const dispatch = useAppDispatch()
    const { problems } = useAppSelector((state) => state.lesson)

    const findProblem = problems.find(
        (problem: LessonQuizI) => problem.id === id
    )

    const allCode =
        findProblem?.answer.length === sources.length
            ? (findProblem.answer as EachCodeBlock[])
            : sources

    const handleOnRun = (index: number) => {
        if (index != allCode.length - 1) return ''

        return allCode.map((code) => code.source).join('\n')
    }

    const handleOnChange = (value: string, index: number) => {
        const newAllSourceCode = allCode.map(({ source }) => ({
            source,
        }))
        newAllSourceCode[index].source = value

        dispatch(updateProblem({ id, answer: newAllSourceCode }))
    }

    return (
        <div>
            {sources.map(
                ({ readOnlyRanges = [], readOnly = false, id, isHasInput }, index) => (
                    <Code
                        key={index}
                        id={id}
                        isReadOnly={readOnly}
                        readOnlyRanges={readOnlyRanges}
                        value={allCode[index] ? allCode[index].source : ''}
                        onChange={(value) => handleOnChange(value, index)}
                        isRunningPoint={index == allCode.length - 1}
                        run={handleOnRun(index)}
                        status={
                            findProblem ? findProblem.status : 'not-attempted'
                        }
                        isHasInput={isHasInput}
                    />
                )
            )}
        </div>
    )
}

export default CodeBlock
