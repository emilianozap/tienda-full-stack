import { styled } from "styled-components";
import { motion } from 'framer-motion';


export const ContainerCartModal = styled(motion.div)`
  position: absolute;
  background-color: transparent;
  width: 280px;
  height: 600px;
  border: 2px solid rgba(255, 255, 255, .5);
  box-shadow: 0 0 30px;
  background-color: black;
  opacity: 0.9;
  top: 0%;
  right: 0;
  z-index: 9;
  border-radius: 15px 0 0 15px;
`
export const HeaderModal = styled.div`
    width: 100%;
    margin: 0%;
    padding: 0%;
    height: 35px;
    color: var(--text-bg-red);
    display: flex;
    justify-content: space-around;
    align-items: center;

  h1{
    color: var(--text-bg-red);
    font-size: 25px;
    position: relative;
    left: 1cm;
  }
  p{
    font-size: 24px;
    color: var(--text-bg-red);
    margin-bottom: 10px;
    cursor: pointer;
    position: relative;
    left: 0.6cm;
    
  }
 

`

export const MainContainers = styled.div`
height: 55%;

`
export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 280px;
  margin: 0%;
  padding: 0%;
  overflow: scroll;
  &::-webkit-scrollbar:horizontal {
    display: none;
  }
`

export const ContainerProductoStyled = styled.div`
  display: flex;
  background-color: red;
  padding: 0%;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  border-radius: 5px;
  background-color: var(--gray-bg);
  margin: 3px 0px 0px 0px;
    img{
        width: 60px;
        height: 80%;
        border: 1px solid black;
        border-radius: 5px;
        margin: 7px;
    }
    h1{
      font-size: 15px;
      text-align: center;
      padding: 0%;
      margin: 0%;
      
    }

`
export const InfoCard = styled.div`
padding: 12px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const ContainerButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 10px;
margin: 0%;
span{
      font-size: 20px;
      cursor: pointer;
      color: var(--red-bg);
    }

p{
margin: 3px;
padding: 0%;
}
`





export const FooterCart = styled.div`
  display: flex;
  margin-top: -45px;
  padding: 10px;

  height: 260px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: var(--gray-bg);
  border-radius: 0px 0px 0px 11px ;
  hr{
    width: 80%;
  }



`

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0%;
  padding: 0%;
  align-items: center;
`;





export const InfoPrecio = styled.div`
  text-align: center;
  
  div{
    display: flex;
    flex-direction: column;
  
  }
  span{
  font-size: 15px;
  }
`;


