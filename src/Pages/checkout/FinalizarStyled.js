import { styled } from "styled-components";



export const FinalizarContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;
h1{
    text-align: center;
}


`

export const CheckOutContainer = styled.div`

border: 2px solid rgba(255, 255, 255, .5);
border-radius: 20px;
box-shadow: 0 0 30px;
width: 80%;
height: 80%;
display: flex;
justify-content: space-around;
align-items: center;
@media (max-width: 730px) {
    flex-direction: column-reverse;
    width: 90%;
    height: 90%;
    
}

`

export const ImgFond = styled.img`
  width: 100%;
  z-index: -100000000;
  opacity: 0.1;
  position: fixed;
`;


