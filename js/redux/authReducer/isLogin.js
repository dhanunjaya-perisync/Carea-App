import { createSlice } from "@reduxjs/toolkit";

const isLoggedIn = createSlice({
    name: "isLoggedInReducer",
    initialState: {
        isLoggedIn:false,
    },
    reducers: {
            setIsLoggedIn(state, action) {
            state.isLoggedIn = action.payload
        }
    }
})
export const { setIsLoggedIn } = isLoggedIn.actions
export const isLoggedInReducer =  isLoggedIn.reducer