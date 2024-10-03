import { otpVerifyReducer, userVerifyReducer } from "./loginReducer";
import { combineReducers } from '@reduxjs/toolkit';
import { webSocketConnectionReducer } from "./webSocketReducer";
import { userInfoReducer } from "./userInfoRedux";
import { isLoggedInReducer } from "./isLogin";
export const authReducer = combineReducers({
    user: otpVerifyReducer,
    userVerify: userVerifyReducer,
    webSocket: webSocketConnectionReducer,
    userInfo: userInfoReducer,
    isLoggedIn: isLoggedInReducer,
})