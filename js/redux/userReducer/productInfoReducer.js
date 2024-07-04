import { createSlice } from "@reduxjs/toolkit";

const productInfo = createSlice({
    name: "productInfoReducer",
    initialState: {
        productInfo: [],
    },
    reducers: {
            setProductInfo(state, action) {
            state.productInfo = action.payload
        }
    }
})
export const { setProductInfo } = productInfo.actions
export const productInfoReducer =  productInfo.reducer