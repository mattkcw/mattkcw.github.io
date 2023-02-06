import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


export interface NavbarState {
    selectedPage: string,
    menuToggled: boolean,
    scrollUp: boolean
}

const initialState: NavbarState = {
    selectedPage: 'Home',
    menuToggled: false,
    scrollUp: true
}


export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        setSelectedPage: (state, action: PayloadAction<string>) => {
            state.selectedPage = action.payload
        },
        setMenuToggled: (state, action: PayloadAction<boolean>) => {
            state.menuToggled = action.payload
        },
        setScrollUp: (state, action: PayloadAction<boolean>) => {
            state.scrollUp = action.payload
        }
    }
})

export const { setSelectedPage, setMenuToggled, setScrollUp } = navbarSlice.actions

export const pageSelected = (state: RootState) => state.navbar.selectedPage
export const menuBool = (state: RootState) => state.navbar.menuToggled
export const scrollState = (state: RootState) => state.navbar.scrollUp 


export default navbarSlice.reducer