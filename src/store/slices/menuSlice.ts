import { createSlice } from '@reduxjs/toolkit'

interface MenuState {
    isSettingsOpen: boolean
    isHistoryOpen: boolean
    isHamburgerOpen: boolean
    isBottomBarOpen: boolean
    bottomBarTab: 'input' | 'output'
}

const initialState: MenuState = {
    isSettingsOpen: false,
    isHistoryOpen: false,
    isBottomBarOpen: true,
    isHamburgerOpen: false,
    bottomBarTab: 'input',
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleSettings: (state) => {
            state.isSettingsOpen = !state.isSettingsOpen
        },
        toggleHistory: (state) => {
            state.isHistoryOpen = !state.isHistoryOpen
        },
        openBottomBar: (state) => {
            state.isBottomBarOpen = true
        },
        toggleBottomBar: (state) => {
            state.isBottomBarOpen = !state.isBottomBarOpen
        },
        toggleHamburger: (state) => {
            state.isHamburgerOpen = !state.isHamburgerOpen
        },
        setBottomBarTab: (state, action) => {
            state.bottomBarTab = action.payload
        },
    },
})

export const {
    toggleSettings,
    toggleHistory,
    openBottomBar,
    toggleBottomBar,
    toggleHamburger,
    setBottomBarTab,
} = menuSlice.actions
export default menuSlice.reducer
