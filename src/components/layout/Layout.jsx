import React, { useEffect } from 'react'
import { LayoutWrapper } from './StyledLayout'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../redux/User/userSlice';
import { toggleCart } from '../../redux/Cart/cartSlice';

export const Layout = ({children}) => {
  const dispatch = useDispatch()
  const hiddenMenu = useSelector(state => state.user.hiddenMenu)
  const{hidden: hiddenCart} = useSelector(state=> state.cart)
  const { pathname } = useLocation();

  useEffect(() => {
    if (!hiddenMenu) {
      dispatch(toggleMenu())
    }
  
    if (!hiddenCart) {
      dispatch(toggleCart())
      
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return <LayoutWrapper>{children}</LayoutWrapper>;
};
