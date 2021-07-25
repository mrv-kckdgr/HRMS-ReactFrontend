import React from 'react';
import { useFormik } from 'formik';
import { Form, Button, Label, Header } from "semantic-ui-react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import JobPositionService from "../services/jobPositionService";


export default function JobPositionAdd() {    

    const validationSchema = Yup.object({        
        position: Yup.string().required("Position information is required!"),               
        
    });

    const initialValues = {
      position: "",
    };

    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);        
        
        let jobPositionService = new JobPositionService();
    
        jobPositionService.addJobPosition(values)   
            .then(result => {
                toast.success("Job Position has been successfully added.")
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
              Add Job Position
            </Header>
            

            <Form.Input label="Job Position" fluid id="position" name="position" type="text" placeholder="Job Position" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.position} />
            {formik.touched.position && formik.errors.position ? (                
                <Label pointing basic color="red" content={formik.errors.position}></Label>
            ) : null}           

            <Button color="purple" type="submit">Save</Button>
        </form>

    );
}