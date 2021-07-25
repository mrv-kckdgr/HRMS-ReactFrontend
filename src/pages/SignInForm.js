import React from 'react';
import { useFormik } from 'formik';
import { Button, Header } from "semantic-ui-react"
import * as Yup from "yup"
import { Link } from "react-router-dom";

export default function SignInForm() {

  const validationSchema = Yup.object({
  });

  const initialValues = {
  };

  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });


  return (
    <form
      onSubmit={formik.handleSubmit}>
      <Header as='h3' block color="purple">
        Candidate or Employer Sign In
      </Header>


      <Link to="/candidate/candidate-login">
        <Button color="purple" type="submit">Candidate</Button>
      </Link>
      <Link to="/employer/employer-login">
        <Button color="purple" type="submit">Employer</Button>
      </Link>
    </form>

  );
}