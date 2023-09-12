import * as Yup from 'yup';
import { regEmail } from "../utils/regExp";

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  cellphone: Yup.string().required('Campo requerido'),
  location: Yup.string().required('Campo requerido'),
  address: Yup.string().required('Campo requerido'),
});

export const registerValidationSchema = Yup.object({
  nombre: Yup.string().required('Campo requerido'),
  email: Yup.string().matches(regEmail, 'Mail no válido').required('Campo requerido'),
  password: Yup.string().min(6, 'Mínimo de caracteres: 6').required('Campo requerido')
})

export const loginValidationSchema = Yup.object({
  email: Yup.string().matches(regEmail, 'Mail no válido').required('Campo requerido'),
  password: Yup.string().min(8, 'Mínimo de caracteres: 8').required('Campo requerido')
})



export const verifyValidationsSchema = Yup.object({
  email: Yup.string().matches(regEmail, 'Mail no válido').required('Campo requerido'),
  code: Yup.string().required('Campo requerido'),
})

export const recuperarValidationsSchema = Yup.object({
  email: Yup.string().matches(regEmail, 'Mail no válido').required('Campo requerido'),

})

export const passwordValidationSchema = Yup.object({
  code: Yup.string().required('Campo requerido'),
  password: Yup.string().min(8, 'Mínimo de caracteres: 8').required('Campo requerido')
})

export const issueValidationSchema = Yup.object({
  title: Yup.string().required('Campo Requerido'),
  description: Yup.string().required('Campo Requerido'),
  priority: Yup.number().required('Campo Requerido'),
});

