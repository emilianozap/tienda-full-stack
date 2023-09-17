import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: transparent;
  width: 280px auto;
  border: 2px solid rgba(255, 255, 255, .5);
  box-shadow: 0 0 30px;
  background-color: black;
  opacity: 0.9;
  top: 82px;
  right: 0;
  z-index: 9;
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      opacity: 90%;
    }
  }
`;

export const LinkStyled = styled(Link)`
margin-top: 10px;
  &:hover {
    opacity: 90%;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;

export const UserTypeStyled = styled.div`
display: flex;
margin: 10px 10px 0px 0px;
flex-direction: column;
p{
  text-align: center;
  font-size: 100px;
  margin: 0%;
  padding: 0%;
}

`