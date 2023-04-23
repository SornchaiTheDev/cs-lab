import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
    isDarkMode: boolean
}
const initialState: InitialState = {
    isDarkMode: true,
}
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.isDarkMode = action.payload
        },
    },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
