import { createSlice } from "@reduxjs/toolkit";
import { addProductCart, removeProductFormCart, resetShippingCost } from "./utilsCart";
import { SHIPPING_COST } from "../../utils/constants";


const initialState = {
    cartItems: [],
    shippingCost: 0,
    hidden: false,
  };



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addProductsCart: (state, action) => {
            return{
                ...state,
                cartItems: addProductCart(state.cartItems, action.payload),
                shippingCost: SHIPPING_COST

            }
         


        },
        removeProductCart: (state, action) => {
            return{
                ...state,
                cartItems: removeProductFormCart(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST)
            }

        },
        clearCart: (state) => {
            return{
                ...state,
                cartItems:[],
                shippingCost: 0
            }
        },
        toggleCart: (state) => {
            return{
                ...state,
                hidden: !state.hidden
            }
        },
    }

})

export const {addProductsCart, removeProductCart, clearCart, toggleCart} = cartSlice.actions

export default cartSlice.reducer