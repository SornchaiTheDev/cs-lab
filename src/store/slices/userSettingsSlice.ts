import { createSlice } from '@reduxjs/toolkit'

interface initialStateI {
    theme: 'light' | 'dark'
    language: 'en' | 'th'
    fontSize: number
    tabSize: number
}

const initialState: initialStateI = {
    theme: 'light',
    language: 'th',
    fontSize: 16,
    tabSize: 2,
}

const userSettingsSlice = createSlice({
    name: 'userSettings',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        },
        setFontSize: (state, action) => {
            state.fontSize = action.payload
        },
        setTabSize: (state, action) => {
            state.tabSize = action.payload
        },
    },
})

export const { setFontSize, setLanguage, setTabSize, setTheme } =
    userSettingsSlice.actions

export default userSettingsSlice.reducer
