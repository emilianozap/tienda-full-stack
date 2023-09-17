import React from "react";
import {
  InfoBoxRegister,
  Form,
  Formik,
  RegisterWrapper,
  

} from "./RecuperarStyled";
import Input from "../../components/UI/Input/Input";
import { AiOutlineMail } from "react-icons/ai";
import Submit from "../../components/UI/Submit/Submit";
import {  recuperarValidationsSchema} from "../../formik/validationSchema";
import {  recuperarInitialValues} from "../../formik/initialValue";
import { recuperarPassword } from "../../axios/axios";
import { useNavigate } from "react-router-dom";

export const RecuperarPassword = () => {
  const navigate = useNavigate();

  return (
    <RegisterWrapper>
      <h1>Recuperar contraseña</h1>
    <InfoBoxRegister>
    <Formik
          initialValues={recuperarInitialValues}
          validationSchema={recuperarValidationsSchema}
         onSubmit={async (values)=>{
         await recuperarPassword(values.email,);
         navigate("/password")
         }}

    >
      <Form>
      <Input
          htmlFor='email'
          type='text'
          name='email'
          id='email'
          placeholder='Tu correo'
          logo={ <AiOutlineMail />}
        >
          Email
        </Input>

   
 
        <div>
        <Submit>enviar</Submit>
        </div>
      </Form>
    </Formik>
  </InfoBoxRegister>
  </RegisterWrapper>
  );
};
