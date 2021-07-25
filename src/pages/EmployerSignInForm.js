import React from 'react';
import { useFormik } from 'formik';
import { Form, Button, Label, Header } from "semantic-ui-react"
import { toast } from "react-toastify";
import * as Yup from "yup"
import EmployerService from "../services/employerService"


export default function EmployerSignInForm() {

    const validationSchema = Yup.object({
        email: Yup.string().email().required("Email information is required!"),
        password: Yup.string().required("Password information is required!"),        
    });

    const initialValues = {
        email:"", password:""        
    };

    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
        

        let loginModel = {  
            email: values.email,
            password: values.password,            
        };
        console.log(loginModel);
        let employerService = new EmployerService();
    
        employerService
      .loginEmployer(values.email, values.password)        
            .then(result => {
                toast.success("Login completed successfully")
                console.log(result);
                console.log(result.data);
                console.log("başarılı")
            }, []).catch(result => {
                console.log(result)
                toast.success("Login completed successfully")
            })
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });


    return (        
        <form
            onSubmit={formik.handleSubmit}>            
            <Header as='h3' block color="olive">
                Employer Login
            </Header>           


            
            <Form.Input label="Username" fluid id="email" name="email" type="email" placeholder="Username" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.email} />
            {formik.touched.email && formik.errors.email ? (                
                <Label pointing basic color="red" content={formik.errors.email}></Label>
            ) : null}

            <Form.Input label="Password" fluid id="password" name="password" type="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.password} />
            {formik.touched.password && formik.errors.password ? (                
                <Label pointing basic color="red" content={formik.errors.password}></Label>
            ) : null}         

            <Button color="purple" type="submit">Login</Button>
        </form>

    );
}