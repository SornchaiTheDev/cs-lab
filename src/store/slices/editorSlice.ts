import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface EditorState {
    code: string
    input: string | null
    output: string | null
}

const initialState: EditorState = {
    code: '',
    input: null,
    output: null,
}

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        setCode(state, action: PayloadAction<string>) {
            state.code = action.payload
        },
        setInput(state, action: PayloadAction<string>) {
            state.input = action.payload
        },
        setOutput(state, action: PayloadAction<string>) {
            state.output = action.payload
        },
    },
})

export const { setCode, setInput, setOutput } = editorSlice.actions
export default editorSlice.reducer
