import React, { useEffect } from "react";
import { InfoBoxRegister, Form, Formik, RegisterWrapper } from "./verifyStyled";
import Input from "../../components/UI/Input/Input";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import Submit from "../../components/UI/Submit/Submit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyValidationsSchema } from "../../formik/validationSchema";
import { verifyInitialValue } from "../../formik/initialValue";
import { verify } from "../../axios/axios";
import { setVerified } from "../../redux/User/userSlice";

export const Verify = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else if (currentUser.verified) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <RegisterWrapper>
      <h1>Verificar identidad</h1>
      <InfoBoxRegister>
        <Formik
          initialValues={verifyInitialValue}
          validationSchema={verifyValidationsSchema}
          onSubmit={async (values) => {
            await verify(currentUser.email, values.code);
            dispatch(setVerified());
            
          
          }}
        >
          <Form>
            <Input
              htmlFor="email"
              type="email"
              name="email"
              id="email"
              placeholder="Tu correo"
              logo={<AiOutlineMail />}
            >
              Email
            </Input>
            <Input
              htmlFor="code"
              type="text"
              name="code"
              id="code"
              placeholder="Tu código"
              logo={<RiLockPasswordLine />}
            >
              código
            </Input>

            <div>
              <Submit>verificarse</Submit>
            </div>
          </Form>
        </Formik>
      </InfoBoxRegister>
    </RegisterWrapper>
  );
};
