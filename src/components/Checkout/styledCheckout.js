import { styled } from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const InfoBox = styled.div`
width: 350px;
display: flex;
justify-content: baseline;
align-items: center;
padding-bottom: 20px;
@media (max-width: 730px) {
  justify-content: center ;
}
@media (max-width: 350px) {
    width: 220px ;
   
   

 
}


`
export const Formik = styled(FormikContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`





export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;

`;



//producto

export const PedidoContainer = styled.div`
 width: 320px;
 display: flex;
 flex-direction: column;
 justify-content: last baseline;
 text-align: center;
 padding: 20px;
 @media (max-width: 730px) {
  justify-content: center;
}
@media (max-width: 400px) {
    width: 280px ;
 
}
@media (max-width: 350px) {
    width: 220px ;
   
   

 
}


`
export const PedidosRealizados = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: scroll;



  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  

  @media (max-height: 800px) {
    height: 270px;
  }

  @media (max-width: 1500px) {
    width: 100%;
  }
  @media (max-width: 350px) {
    width: 220px ;
   
   

 
}
`;

export const FooterCheckout = styled.div`
background-color: var(--gray-bg);
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 2px solid white;
@media (max-width: 400px) {
    height: 280px auto;
    margin: 20px auto;
    background-color: transparent;
    border: none;
}

` 

export const TotalStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--text-bg-red);


`;
