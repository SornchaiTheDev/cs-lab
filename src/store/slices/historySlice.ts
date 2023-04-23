import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HistoryI } from '@/interface/History'
import { initialDoc } from '@/__mock__/initialDoc'

interface HistoryState {
    allHistory: HistoryI[]
    selected: HistoryI | null
}

const initialState: HistoryState = {
    allHistory: [
        {
            code: 'print("Chokun love Nut")',
            date: new Date('December 20, 2565 16:12:00').getTime(),
            status: ['P', 'P', 'P', 'P', 'P', 'P', 'P'],
        },
        {
            code: initialDoc,
            date: new Date('November 17, 2565 11:12:00').getTime(),
            status: ['P', 'P', 'P', 'P', '-', '-', '-'],
        },
        {
            code: 'Hello World',
            date: new Date('November 16, 2565 11:12:01').getTime(),
            status: ['P', 'P', 'P', 'S', 'C', 'P', 'P'],
        },
    ],
    selected: null,
}

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        setHistory(state, action: PayloadAction<HistoryI[]>) {
            state.allHistory = action.payload
        },
        setSelected(state, action: PayloadAction<HistoryI | null>) {
            state.selected = action.payload
        },
    },
})

export const { setHistory, setSelected } = historySlice.actions
export default historySlice.reducer
