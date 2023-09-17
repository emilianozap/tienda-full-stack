import {
  InfoBoxRegister,
  Form,
  Formik,
  RegisterWrapper,
} from "./passwordStyled";
import Input from "../../components/UI/Input/Input";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsKey } from "react-icons/bs";
import Submit from "../../components/UI/Submit/Submit";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { passwordValidationSchema } from "../../formik/validationSchema";
import { passwordInitialValues } from "../../formik/initialValue";
import { passwordNew } from "../../axios/axios";
import {  setPassword } from "../../redux/User/userSlice";

export const Password = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <RegisterWrapper>
      <h1>Verificar identidad</h1>
      <InfoBoxRegister>
        <Formik
          initialValues={passwordInitialValues}
          validationSchema={passwordValidationSchema}
          onSubmit={async (values, actions) => {
           const usuario =await passwordNew(values.password, values.code);
           actions.resetForm(navigate("/"))
            dispatch(setPassword({
              ...usuario.user.password
            }));

          }}
        >
          <Form>
            <Input
              htmlFor="password"
              type="password"
              name="password"
              id="password"
              placeholder="Tu contraseña"
              logo={<BsKey />}
            >
              Password
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
