import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Submit from "../../components/UI/Submit/Submit";
import { Form, ValidateContainerStyled,  Formik, IssueWrapper } from "./IssueStyles";
import { useSelector } from "react-redux";
import { issueInitialValues } from "../../formik/initialValue";
import { ADMIN } from "../../utils";
import { createIssue } from "../../axios/axios-issue";
import { issueValidationSchema } from "../../formik/validationSchema";
import Input from "../../components/UI/Input/Input";
import { LuSubtitles } from "react-icons/lu";
import { MdDescription, MdOutlinePriorityHigh } from "react-icons/md";



export const Issue = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else if (currentUser.rol !== ADMIN) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <IssueWrapper>
            <h1>Crear issue</h1>

    <ValidateContainerStyled>
      <Formik
        initialValues={issueInitialValues}
        validationSchema={issueValidationSchema}
        onSubmit={async (values) => {
          await createIssue(
            values.title,
            values.description,
            values.priority,
            currentUser
          );
          navigate("/");
        }}
      >
        <Form>
        <Input
          htmlFor='title'
          type='title'
          name='title'
          id='title'
          placeholder='titulo'
          logo={ <MdDescription />}
        >
          titulo
        </Input>
   
        <Input
          htmlFor='description'
          type='text'
          name='description'
          id='description'
          placeholder='descripción'
          logo={ <LuSubtitles />}
        >
          Descripción
        </Input>
        <Input
          htmlFor='priority'
          type='number'
          name='priority'
          id='priority'
          placeholder='prioridad'
          logo={ <MdOutlinePriorityHigh />}
        >
          Prioridad
        </Input>
          <Submit>Crear</Submit>
        </Form>
      </Formik>
    </ValidateContainerStyled>
    </IssueWrapper>
  );
};
