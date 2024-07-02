import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name: "userInfoReducer",
    initialState: {
        userInfo: [],
    },
    reducers: {
            setUserInfo(state, action) {
            state.userInfo = action.payload
        }
    }
})
export const { setUserInfo } = userInfo.actions
export const userInfoReducer =  userInfo.reducer