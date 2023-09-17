import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    orders: null,
    loading: false,
    error: null
}







const orderSlice = createSlice({
    name: `orders`,
    initialState,
    reducers: {
        createOrderFail: (state, action) =>{
            return{
                ...state,
                loading: false,
                error: action.payload

            }
        },
        fetchOrderSuccess :(state, action) => {
            return {
                ...state,
                loading: false,
                error: null,
                orders: [...action.payload]
            }
                
        },
        fetchOrderFail :(state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
                
        },
        fetchOrderStart: state => {
            return {
                ...state,
                loading: true
            }
        },
        clearError: state =>{
            return{
                ...state,
                error:null
            }
        },
        clearOrders: state =>{
           return{
            ...state,
            orders: null
           }
        }


    }



})

export const {createOrderFail, fetchOrderFail, fetchOrderStart, fetchOrderSuccess, clearError, clearOrders} = orderSlice.actions

export default orderSlice.reducer