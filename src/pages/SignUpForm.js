import React from 'react';
import { useFormik } from 'formik';
import { Button, Header } from "semantic-ui-react"
import * as Yup from "yup"
import { Link } from "react-router-dom";


export default function SignUpForm() {

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
      <Header as='h3' block>
        Candidate or Employer Sign Up
      </Header>


      <Link to="/candidate/add">
        <Button color="purple" type="submit">Candidate</Button>
      </Link>
      <Link to="/employer/add">
        <Button color="purple" type="submit">Employer</Button>
      </Link>
    </form>

  );
}