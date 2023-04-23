export interface LessonQuizI {
    id: string
    answer: string | { source: string }[]
    type: 'codeblock' | 'input'
    status: 'success' | 'failed' | 'not-attempted'
}
