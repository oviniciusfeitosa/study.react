import React from "react";
import { Formik, Form, Field } from "formik";
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
          <label htmlFor="login">Login</label>
          <Field name="login" id="login" />
          {errors.login && touched.login ? <div>{errors.login}</div> : null}
          <label htmlFor="password">Password</label>
          <Field name="password" id="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
