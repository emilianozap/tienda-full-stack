import { styled } from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from 'formik';
import { Link } from 'react-router-dom';


export const RegisterWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 700px;
margin: 30px;



`


export const InfoBoxRegister = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
border: 2px solid rgba(255, 255, 255, .5);
border-radius: 20px;
box-shadow: 0 0 30px;
width: 270px;
height: 80%;

`
export const Formik = styled(FormikContainer)`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`





export const Form = styled(FormikForm)`
  display: flex;
  width: 100%;
 
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginEmailStyled = styled(Link)`
  & p {
    color: var(--orange);

    :hover {
      text-decoration: underline;
      transition: all 0.25s ease-out;
    }
  }
`;