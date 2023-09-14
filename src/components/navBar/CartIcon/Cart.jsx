import React from 'react'
import { IconContainers } from './CartStyled'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../../redux/Cart/cartSlice';

export const Cart = () => {
    const dispatch= useDispatch()
    const totalCartItemsQuantity = useSelector(state => state.cart.cartItems).reduce(
      (acc, item) => (acc += item.quantity),
      0
    )

  

    
  return (
    <IconContainers onClick={()=> dispatch(toggleCart())}>

    <AiOutlineShoppingCart/>
    <p>{totalCartItemsQuantity}</p>
    </IconContainers>
  )
}
