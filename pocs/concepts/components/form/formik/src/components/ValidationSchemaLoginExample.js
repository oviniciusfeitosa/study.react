import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Muito curto!")
    .max(30, "Muito longo!")
    .required("Obrigatório"),
  password: Yup.string()
    .min(2, "Muito curto!")
    .max(30, "Muito longo!")
    .required("Obrigatório"),
});

const submitHandler = (values) => {
  // same shape as initial values
  console.log(values);
};

export const ValidationSchemaLoginExample = () => (
  <div>
    <h1>Signin</h1>
    <Formik
      initialValues={{
        login: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={submitHandler}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="login">Login</label>
            <Field name="login" id="login" />
            <ErrorMessage name="login" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" id="password" />
            <ErrorMessage name="password" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
