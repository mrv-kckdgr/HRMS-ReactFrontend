import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup"
import { Form, Button, Label, Header } from "semantic-ui-react";
import EmployeeService from '../../services/employeeService';
import { toast } from "react-toastify";
import { useParams } from 'react-router';

export default function EmployeeUpdate() {

    let { id } = useParams()

    const [employee, setEmployee] = useState({});

    useEffect(() => {
        let employeeService = new EmployeeService()
        employeeService.getByEmployeeId(id).then(result => setEmployee(result.data.data));
    }, [])

    const validationSchema = Yup.object({
        //id: Yup.number(),
        email: Yup.string().required("Email information is required!"),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        passwordRepeat: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        firstName: Yup.string().required("First Name information is required!"),
        lastName: Yup.string().required("Last Name information is required!")
    });

    const initialValues = {
        id, email: "", password: "", passwordRepeat: "", firstName: "", lastName: ""
    };


    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);

        let employeeService = new EmployeeService();

        employeeService.update(values)
            .then(result => {
                toast.success("Employee has been successfully updated.")
                console.log(result);
                console.log(result.data);
                console.log("başarılı")
            }, [])

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
                Employee Update
            </Header>

            {/* Id: {id} */}

            <Form.Input fluid id="id" name="id" type="hidden" placeholder="Id" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={employee.id} />


            <Form.Input label="First Name" fluid id="firstName" name="firstName" type="text" placeholder="First Name" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={employee.firstName} />
            {formik.touched.firstName && formik.errors.firstName ? (
                <Label pointing basic color="red" content={formik.errors.firstName}></Label>
            ) : null}

            <Form.Input label="Last Name" fluid id="lastName" name="lastName" type="text" placeholder="Last Name" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={employee.lastName} />
            {formik.touched.lastName && formik.errors.lastName ? (
                <Label pointing basic color="red" content={formik.errors.lastName}></Label>
            ) : null}

            <Form.Input label="Email" fluid id="email" name="email" type="email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={employee.email} />
            {formik.touched.email && formik.errors.email ? (
                <Label pointing basic color="red" center content={formik.errors.email}></Label>
            ) : null}

            <Form.Input label="Password" fluid id="password" name="password" type="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={employee.password} />
            {formik.touched.password && formik.errors.password ? (
                <Label pointing basic color="red" content={formik.errors.password}></Label>
            ) : null}

            <Form.Input label="Password Repeat" fluid id="passwordRepeat" name="passwordRepeat" type="password" placeholder="Password Repeat" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={employee.password} />
            {formik.touched.passwordRepeat && formik.errors.passwordRepeat ? (
                <Label pointing basic color="red" content={formik.errors.passwordRepeat}></Label>
            ) : null}


            <br />
            <Button color="purple" type="submit">Update</Button>
        </form>
    )
}