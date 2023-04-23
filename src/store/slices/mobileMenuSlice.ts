import { menuType } from '@/interface/mobileMenu'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface MobileMenuState {
    selected: menuType
}

const initialState: MobileMenuState = {
    selected: 'problem',
}

export const mobileMenu = createSlice({
    name: 'mobileMenu',
    initialState,
    reducers: {
        setMenu(state, action: PayloadAction<menuType>) {
            state.selected = action.payload
        },
    },
})

export const { setMenu } = mobileMenu.actions
export default mobileMenu.reducer
