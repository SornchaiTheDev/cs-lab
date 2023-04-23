
export default interface ProblemI {
    id : string
    name: string
    status: 'success' | 'failed' | 'not-attempted'
}