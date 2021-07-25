import React from 'react';
import { useFormik } from 'formik';
import { Form, Button, Label, Header } from "semantic-ui-react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import TechnologyService from "../services/technologyService";

export default function TechnologyAdd() {    

    const validationSchema = Yup.object({
        resumeId: Yup.number().required("Resume information is required!"),
        description: Yup.string().required("Description information is required!"),               
        createDate: Yup.date().required("End Date information is required!"),
    });

    const initialValues = {
        resumeId: "", description: "", createDate: ""
    };


    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);        
        
        let technologyService = new TechnologyService();
    
        technologyService.addTechnologyDto(values)   
            .then(result => {
                toast.success("Technology has been successfully added.")
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
                Add Technology
            </Header>
            

            <Form.Input label="Description" fluid id="description" name="description" type="text" placeholder="Description" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.description} />
            {formik.touched.description && formik.errors.description ? (                
                <Label pointing basic color="red" content={formik.errors.description}></Label>
            ) : null}
             

            <Form.Input label="Create Date" fluid id="createDate" name="createDate" type="date" placeholder="Create Date" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.createDate} />
            {formik.touched.createDate && formik.errors.createDate ? (                
                <Label pointing basic color="red" center content={formik.errors.createDate}></Label>
            ) : null}  

            <Form.Input label="Resume Id" fluid id="resumeId" name="resumeId" type="text" placeholder="Resume Id" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.resumeId} />
            {formik.touched.resumeId && formik.errors.resumeId ? (                
                <Label pointing basic color="red" content={formik.errors.resumeId}></Label>
            ) : null}  

            <Button color="purple" type="submit">Save</Button>
        </form>

    );
}