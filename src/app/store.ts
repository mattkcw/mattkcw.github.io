import { configureStore } from "@reduxjs/toolkit";
import  cursorReducer from "../components/cursor/cursorSlice";
import navbarReducer from "../components/navbar/navbarSlice";

export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        cursor: cursorReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch