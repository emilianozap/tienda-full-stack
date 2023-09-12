import React from "react";
import {
  InfoBoxRegister,
  Form,
  Formik,
  RegisterWrapper,
  LoginEmailStyled

} from "./LoginStyled";
import Input from "../../components/UI/Input/Input";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey} from "react-icons/bs";
import Submit from "../../components/UI/Submit/Submit";
import { useDispatch } from "react-redux";
import { loginValidationSchema} from "../../formik/validationSchema";
import { loginInitialValues} from "../../formik/initialValue";
import { login } from "../../axios/axios";
import { setCurrentUser } from "../../redux/User/userSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
 

  return (
    <RegisterWrapper>
      <h1>Iniciar sesión</h1>
    <InfoBoxRegister>
    <Formik
         initialValues={loginInitialValues}
         validationSchema={loginValidationSchema}
         onSubmit={async (values, actions) => {
           const user = await login(values.email, values.password);
           actions.resetForm(navigate("/"))
           if (user) {
             dispatch(
               setCurrentUser({
                 ...user.user,
                 token: user.token,
               })
             );
           }
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
        <Input
             htmlFor='password'
             type='password'
             name='password'
             id='localidad'
             placeholder='Tu contraseña'
            logo={<BsKey  />}
        >
          Password
        </Input>
        <LoginEmailStyled to='/recuperar'>
            <p>Recuperar contraseña</p>
          </LoginEmailStyled>
 
        <div>
        <Submit >iniciar</Submit>
        </div>
      </Form>
    </Formik>
  </InfoBoxRegister>
  </RegisterWrapper>
  );
};
