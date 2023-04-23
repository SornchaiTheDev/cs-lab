type Status = 'P' | '-' | 'S' | 'C'
export interface HistoryI {
    date: number
    status: Status[]
    code: string
}
