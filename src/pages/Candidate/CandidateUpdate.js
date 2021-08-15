import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup"
import { Button, Header } from 'semantic-ui-react';
import MTextInput from '../../utilities/customFormControls/MTextInput';
import CandidateService from "../../services/candidateService";
import { toast } from "react-toastify";

export default function CandidateUpdate() {

    const initialValues = {
        firstName: "", lastName: "", nationalNumber: "", email: "", password: "", passwordRepeat: "", dateOfBirth: ""
    };


    const schema = Yup.object({
        firstName: Yup.string().required("Firstname field is required!"),
        lastName: Yup.string().required("Lastname field is required!"),
        nationalNumber: Yup.string().required("National Number field is required!"),
        email: Yup.string().required("Email field is required!"),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        passwordRepeat: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        dateOfBirth: Yup.date().required("Date of birth is required!"),
    });


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(candidate) => {
                console.log(candidate);
                let candidateService = new CandidateService();
                candidateService.update(candidate)
                    .then(result => {
                        toast.success("Candidate has been successfully added.")
                        console.log(result);
                        console.log(result.data);
                        console.log("başarılı")
                    }, [])

            }}

        >
            <Form className="ui form">
                <Header as='h3' block color="purple">
                    Candidate Sign Up
                </Header>
                <label>First Name</label><MTextInput name="firstName" placeholder="First Name"/>
                <label>Last Name</label><MTextInput name="lastName" placeholder="Last Name" />
                <label>National Number</label><MTextInput name="nationalNumber" placeholder="National Number" />
                <label>Date of Birth</label><MTextInput name="dateOfBirth" placeholder="Date of Birth" />
                <label>Email</label><MTextInput name="email" placeholder="Email" />
                <label>Password</label><MTextInput name="password" placeholder="Password" />
                <label>Password Repeat</label><MTextInput name="passwordRepeat" placeholder="Password Repeat" />
                <Button color="purple" type="submit">Save</Button>
            </Form>

        </Formik>
    )
}