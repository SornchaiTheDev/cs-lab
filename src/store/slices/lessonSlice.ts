import { LessonQuizI } from '@/interface/LessonQuiz'
import { createSlice } from '@reduxjs/toolkit'

interface LessonState {
    problems: LessonQuizI[]
}

const initialState: LessonState = {
    problems: [
        {
            id: '1',
            type: 'codeblock',
            answer: [],
            status: 'not-attempted',
        },
        {
            id: '2',
            type: 'codeblock',
            answer: [],
            status: 'not-attempted',
        },
        {
            id: '3',
            type: 'codeblock',
            answer: [],
            status: 'not-attempted',
        },
        {
            id: '4',
            type: 'codeblock',
            answer: [],
            status: 'not-attempted',
        },
        {
            id: '5',
            type: 'codeblock',
            answer: [],
            status: 'not-attempted',
        },
        { id: '6', type: 'input', answer: 'KFC', status: 'not-attempted' },
    ],
}

const lessonSlice = createSlice({
    name: 'lesson',
    initialState,
    reducers: {
        setProblems(state, action) {
            state.problems = action.payload
        },
        updateProblem(state, action) {
            const { id, answer } = action.payload
            const index = state.problems.findIndex(
                (problem) => problem.id === id
            )
            state.problems[index].answer = answer
            state.problems[index].status = 'not-attempted'
        },
        clearProblems(state) {
            const allProblems = state.problems.map((problem) => {
                if (problem.type === 'codeblock') {
                    problem.answer = []
                } else {
                    problem.answer = ''
                }
                problem.status = 'not-attempted'
                return problem
            })
            state.problems = allProblems
        },
    },
})

export const { setProblems, updateProblem, clearProblems } = lessonSlice.actions
export default lessonSlice.reducer
