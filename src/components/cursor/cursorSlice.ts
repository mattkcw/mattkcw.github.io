import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface cursorState {
    cursorXY: Array<number>
}

const initialState: cursorState = {
    cursorXY: [0, 0],
}

export const cursorSlice = createSlice({
    name: 'cursor',
    initialState,
    reducers: {
        getCursorPosition: (state, action: PayloadAction<Array<number>>) => {
            state.cursorXY = action.payload;
        }
    }
})

export const { getCursorPosition } = cursorSlice.actions

export const cursorPosition = (state: RootState) => state.cursor.cursorXY

export default cursorSlice.reducer