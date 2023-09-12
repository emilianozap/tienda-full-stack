import React from 'react'
import { IconContainers } from '../StyledNavBar'
import { toggleHiddenMenu } from '../../../redux/User/userSlice';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const UserIcon = () => {
    const dispatch= useDispatch()
    const { currentUser } = useSelector((state) => state.user);
  
    const navigate = useNavigate();


    
  return (
    <IconContainers    onClick={() => 
      currentUser ? dispatch(toggleHiddenMenu()) : navigate('/registrarse')}>
    </IconContainers>
    
  )
}
