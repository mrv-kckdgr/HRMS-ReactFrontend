import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Form, Button, Label, Header } from "semantic-ui-react"
import { toast } from "react-toastify";
import * as Yup from "yup"
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import LanguageService from '../../services/languageService';


export default function LanguageUpdate() {

    let { id } = useParams()

    const [language, setLangugae] = useState({});

    useEffect(() => {
        const languageService = new LanguageService();
        languageService.getById(id)
            .then((result) => setLangugae(result.data.data));
    }, []);


    const validationSchema = Yup.object({
        resumeId: Yup.number().required("Resume information is required!"),
        languageName: Yup.string().required("Language Name information is required!"),
        languageLevel: Yup.string().required("Language Level information is required!"),
    });

    const initialValues = {
        id, resumeId: 1, languageName: "", languageLevel: "",
    };

    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);

        let languageService = new LanguageService();

        languageService.updateLanguageDto(values)
            .then(result => {
                toast.success("Language has been successfully updated.")
                console.log(result)
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
            { }
            <Header as='h3' block color="purple">
                Language Update
            </Header>



            <Form.Input label="Language Name" fluid id="languageName" name="languageName" type="text" placeholder="School Name" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={language.languageName} />
            {formik.touched.languageName && formik.errors.languageName ? (
                <Label pointing basic color="red" content={formik.errors.languageName}></Label>
            ) : null}


            <Form.Input label="Language Level" fluid id="languageLevel" name="languageLevel" type="text" placeholder="Language Level" onChange={formik.handleChange} onBlur={formik.handleBlur}
                defaultValue={language.languageLevel} />
            {formik.touched.languageLevel && formik.errors.languageLevel ? (
                <Label pointing basic color="red" content={formik.errors.languageLevel}></Label>
            ) : null}

            <br />

            <Button color="purple" type="submit">Update</Button>
            <Link to="/resume/update/1">
                <Button color="red" type="submit">Cancel</Button>
            </Link>
        </form>

    );
}