import React from 'react';
import { useFormik } from 'formik';
import { Form, Button, Label, Header } from "semantic-ui-react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import LanguageService from '../../services/languageService';

export default function LanguageAdd() {    

    const validationSchema = Yup.object({
        resumeId: Yup.number().required("ResumeId information is required!"),
        languageName: Yup.string().required("Language Name information is required!"),
        languageLevel: Yup.string().required("Language Level information is required!").min(1, "Size is 1"),               
    });

    const initialValues = {
        resumeId:1, languageName: "", languageLevel: ""
    };


    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);        
        
        let languageService = new LanguageService();
    
        languageService.addLanguageDto(values)   
            .then(result => {
                toast.success("Language has been successfully added.")
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
                Add Language
            </Header>
            

            <Form.Input label="Language Name" fluid id="languageName" name="languageName" type="text" placeholder="Language Name" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.languageName} />
            {formik.touched.languageName && formik.errors.languageName ? (                
                <Label pointing basic color="red" content={formik.errors.languageName}></Label>
            ) : null}
             

            <Form.Input label="Language Level" fluid id="languageLevel" name="languageLevel" type="text" placeholder="Language Level" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.languageLevel} />
            {formik.touched.languageLevel && formik.errors.languageLevel ? (                
                <Label pointing basic color="red" center content={formik.errors.languageLevel}></Label>
            ) : null}  

            <Form.Input label="Resume Id" fluid id="resumeId" name="resumeId" type="text" placeholder="Resume Id" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.resumeId} />
            {formik.touched.resumeId && formik.errors.resumeId ? (                
                <Label pointing basic color="red" content={formik.errors.resumeId}></Label>
            ) : null}  
            <br/>

            <Button color="purple" type="submit">Save</Button>
        </form>

    );
}