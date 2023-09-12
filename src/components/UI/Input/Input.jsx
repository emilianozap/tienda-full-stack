import {useState} from "react";

import { InputBox, InputText, Label, ErrorMessageStyled } from "./InputStyles";
import { ErrorMessage, Field } from "formik";

const Input = ({ children, name, htmlFor, type, id, placeholder, logo }) => {
  
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputBox>
          <span >{logo}</span>
          <Label htmlFor={htmlFor}>{children}</Label>
          <InputText
            type={type}
            id={id}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />
          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputBox>
      )}
    </Field>
  );
};

export default Input;
