import React from "react";
import {
  InfoBoxRegister,
  Form,
  Formik,
  RegisterWrapper,LoginEmailStyled
} from "./RegisterStyled";
import Input from "../../components/UI/Input/Input";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey, BsPersonDown } from "react-icons/bs";
import Submit from "../../components/UI/Submit/Submit";
import { useDispatch, } from "react-redux";
import { registerValidationSchema } from "../../formik/validationSchema";
import { registerInitialValues } from "../../formik/initialValue";
import { registerUser } from "../../axios/axios";
import { setCurrentUser } from "../../redux/User/userSlice";
import { useNavigate } from "react-router-dom";

export const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  


  return (
    <RegisterWrapper>
      <h1>registrarse</h1>
    <InfoBoxRegister>
    <Formik
          initialValues={registerInitialValues}
          validationSchema={registerValidationSchema}
          onSubmit={async (values, actions) => {
            const usuario = await registerUser(values.nombre, values.email, values.password)
            actions.resetForm(navigate("/verificar"))
            if (usuario) {
              dispatch(setCurrentUser({
                ...usuario.user,
                token: usuario.token,
              }))
            }
          }}

    >
      <Form>
        <Input
          htmlFor='nombre'
          name='nombre'
          type='text'
          id='nombre'
          placeholder='Tu nombre'
          logo={<BsPersonDown />}
        >
          Nombre
        </Input>

        <Input
          htmlFor='email'
          type='email'
          name='email'
          id='email'
          placeholder='Tu correo'
          logo={<AiOutlineMail />}
        >
          Email
        </Input>
        <Input
             htmlFor='password'
             type='password'
             name='password'
             id='password'
             placeholder='Tu contraseña'
          logo={<BsKey />}
        >
          Password
        </Input>
        <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <LoginEmailStyled to='/verificar'>
            <p>ya tengo mi código ingresarlo</p>
          </LoginEmailStyled>
 
        <div>
        <Submit onClick={navigate("/verificar")}>registrarse</Submit>
        </div>
       
      </Form>
    </Formik>
  </InfoBoxRegister>
  </RegisterWrapper>
  );
};
