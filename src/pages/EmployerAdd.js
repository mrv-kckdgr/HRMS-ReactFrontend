import React from "react";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import {Button, Header} from "semantic-ui-react";
import MTextInput from "../utilities/customFormControls/MTextInput";
import { toast } from "react-toastify";
import EmployerService from "../services/employerService";

export default function EmployerAdd() {

    const initialValues = {
        companyName:"", webAddress:"", phoneNumber:"", email:"", password:"", passwordRepeat:""
    }

    const schema = Yup.object({
        companyName:Yup.string().required("Company name is required!"),
        webAddress:Yup.string().required("Web address is required!"),
        phoneNumber:Yup.string().required("Phone number is required!"),
        email: Yup.string().required("Email field is required!"),
        password: Yup.string()
                      .required('No password provided.') 
                      .min(8, 'Password is too short - should be 8 chars minimum.')
                      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        passwordRepeat: Yup.string()
                      .required('No password provided.') 
                      .min(8, 'Password is too short - should be 8 chars minimum.')
                      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    });


    return(        
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit ={(employer)=>{
            if(employer.password != employer.passwordRepeat){
                toast.error("Passwords do not match!!!")
            }
            console.log(employer);
            let employerService = new EmployerService();
    
            employerService.addEmployer(employer)   
            .then(result => {
                toast.success("Employer has been successfully added.")
                console.log(result);
                console.log(result.data);
                console.log("başarılı")
            }, [])
            
        }}>            
           
            <Form className="ui form">
            <Header as='h3' block color="purple">
                Employer Sign Up
            </Header>
                <MTextInput name="companyName" placeholder="Company Name"/>
                <MTextInput name="webAddress" placeholder="Web Address"/>
                <MTextInput name="phoneNumber" placeholder="Phone Number"/>
                <MTextInput name="email" placeholder="Email"/>
                <MTextInput name="password" placeholder="Password"/>     
                <MTextInput name="passwordRepeat" placeholder="Password Repeat"/>    
                <Button color="purple" type="submit">Save</Button>
            </Form>

        </Formik>
    )
}