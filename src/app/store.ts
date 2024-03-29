import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
export const store = configureStore({
    reducer:{
        auth:authReducer,
    },
    devTools:true
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch