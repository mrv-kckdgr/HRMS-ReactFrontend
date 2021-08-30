import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup"
import { Form, Button, Label, Header, Icon } from "semantic-ui-react";
import EmployerService from '../../services/employerService';
import { toast } from "react-toastify";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function EmployerUpdate() {

    let { id } = useParams()


    const [employer, setEmployer] = useState({ });
    const employerService = new EmployerService()

    useEffect(() => {
        employerService.getById(id).then(result => setEmployer(result.data.data));
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
        companyName: Yup.string().required("Company Name information is required!"),
        webAddress: Yup.string().required("Web Address information is required!"),
        phoneNumber: Yup.string().required("Phone Number information is required!")
    });

    const initialValues = {
        id, email: "", password: "", passwordRepeat: "", companyName: "", webAddress: "", phoneNumber: ""
    };


    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);

        employerService.updateEmployer(values)
            .then(result => {
                toast.success("Employer has been successfully updated.")
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
                Employer Update
            </Header>

            {/* Id: {id} */}

            <Form.Input fluid id="id" name="id" type="hidden" placeholder="Id" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={employer.id} />


            <Form.Input label="Company Name" fluid id="companyName" name="companyName" type="text" placeholder="First Name" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={employer.companyName} />
            {formik.touched.companyName && formik.errors.companyName ? (
                <Label pointing basic color="red" content={formik.errors.companyName}></Label>
            ) : null}

            <Form.Input label="Web Address" fluid id="webAddress" name="webAddress" type="text" placeholder="Last Name" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={employer.webAddress} />
            {formik.touched.webAddress && formik.errors.webAddress ? (
                <Label pointing basic color="red" content={formik.errors.webAddress}></Label>
            ) : null}

            <Form.Input label="Phone Number" fluid id="phoneNumber" name="phoneNumber" type="text" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={employer.phoneNumber} />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <Label pointing basic color="red" content={formik.errors.phoneNumber}></Label>
            ) : null}

            <Form.Input label="Email" fluid id="email" name="email" type="email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={employer.email} />
            {formik.touched.email && formik.errors.email ? (
                <Label pointing basic color="red" center content={formik.errors.email}></Label>
            ) : null}

            <Form.Input label="Password" fluid id="password" name="password" type="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={employer.password} />
            {formik.touched.password && formik.errors.password ? (
                <Label pointing basic color="red" content={formik.errors.password}></Label>
            ) : null}

            <Form.Input label="Password Repeat" fluid id="passwordRepeat" name="passwordRepeat" type="password" placeholder="Password Repeat" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={employer.password} />
            {formik.touched.passwordRepeat && formik.errors.passwordRepeat ? (
                <Label pointing basic color="red" content={formik.errors.passwordRepeat}></Label>
            ) : null}


            <br />

            <Button color="purple" type="submit"><Icon name='edit' /> Update</Button>
            <Link to={`/employer/employer-list`}>
                <Button icon color="red" type="submit"><Icon name='remove' /> Cancel</Button>
            </Link>

        </form>
    )
}