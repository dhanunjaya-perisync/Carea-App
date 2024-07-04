import { combineReducers } from '@reduxjs/toolkit';
import { productInfoReducer } from './productInfoReducer';

export const userReducer = combineReducers({
    productInfo:productInfoReducer,
})