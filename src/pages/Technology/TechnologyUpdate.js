import React, {useState, useEffect} from 'react';
import { useFormik } from 'formik';
import { Form, Button, Label, Header } from "semantic-ui-react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import TechnologyService from "../../services/technologyService";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function TechnologyUpdate() {    

    let {id} = useParams()

    const [technology, setTechnology] = useState({})

    useEffect(()=> {
        let technologyService = new TechnologyService();
        technologyService.getById(id).then((result) => setTechnology(result.data.data));
    }, [])

    const validationSchema = Yup.object({
        resumeId: Yup.number().required("Resume information is required!"),
        description: Yup.string().required("Description information is required!"),               
    });

    const initialValues = {
        id, resumeId: 1, description: "", 
    };


    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);        
        
        let technologyService = new TechnologyService();
    
        technologyService.updateTechnologyDto(values)   
            .then(result => {
                toast.success("Technology has been successfully updated.")
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
                Update Technology
            </Header>
            

            <Form.Input label="Description" fluid id="description" name="description" type="text" placeholder="Description" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={technology.description} />
            {formik.touched.description && formik.errors.description ? (                
                <Label pointing basic color="red" content={formik.errors.description}></Label>
            ) : null}
             

            <Form.Input label="Resume Id" fluid id="resumeId" name="resumeId" type="text" placeholder="Resume Id" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.resumeId} />
            {formik.touched.resumeId && formik.errors.resumeId ? (                
                <Label pointing basic color="red" content={formik.errors.resumeId}></Label>
            ) : null}  

            <br/>
            <Button color="purple" type="submit">Update</Button>
            <Link to="/resume/update/1">
                <Button color="red" type="submit">Cancel</Button>
            </Link>
        </form>

    );
}