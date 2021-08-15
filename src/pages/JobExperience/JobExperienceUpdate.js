import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Form, Button, Label, Header } from "semantic-ui-react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import JobPositionService from "../../services/jobPositionService";
import JobExperienceService from "../../services/jobExperienceService";
import { useParams } from 'react-router';


export default function JobExperienceUpdate() {

    let { id } = useParams()

    const [jobExperience, setJobExperience] = useState({})

    useEffect(() => {
        let jobExperienceService = new JobExperienceService();
        jobExperienceService.getById(id).then(result => setJobExperience(result.data.data))
    }, [])

    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
        const jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions()
            .then((result) => setJobPositions(result.data.data));
        console.log(jobPositions)
    }, []);

    const jobPositionsOptions = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.position,
        value: jobPosition.id
    }))


    const validationSchema = Yup.object({
        resumeId: Yup.number().required("Resume information is required!"),
        companyName: Yup.string().required("Company Name information is required!"),
        jobPositionId: Yup.number().required("Job position field is required!"),
        startingDate: Yup.date().required("Starting Date information is required!"),
        endDate: Yup.date().required("End Date information is required!")
    });

    const initialValues = {
        id, resumeId: 1, companyName: "", jobPositionId: "", startingDate: "", endDate: ""
    };


    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);

        let jobExperienceService = new JobExperienceService();

        jobExperienceService.addJobExperienceDto(values)
            .then(result => {
                toast.success("Job Experience has been successfully added.")
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
        <div>
            {/* {jobExperience.map((x) => ( */}
            <form
                onSubmit={formik.handleSubmit}>

                <Header as='h3' block color="purple">
                    Job Experience Update
                </Header>



                <Form.Select
                    fluid
                    label="Job Position"
                    placeholder='Select Job Position'
                    name="jobPositionId"
                    options={jobPositionsOptions}
                    //defaultValue={jobExperience.jobPosition.id}
                    //defaultValue={jobExperience.jobPosition.id}
                    value={jobExperience.jobPosition.id}
                    onChange={(e, { name, value }) => formik.setFieldValue(name, value)}

                />
                {formik.touched.jobPositionId && formik.errors.jobPositionId ? (
                    <Label pointing basic color="red" content={formik.errors.jobPositionId}></Label>
                ) : null}


                <Form.Input label="Company Name" fluid id="companyName" name="companyName" type="text" placeholder="Company Name" onChange={formik.handleChange} onBlur={formik.handleBlur}
                    defaultValue={jobExperience.companyName} />
                {formik.touched.companyName && formik.errors.companyName ? (
                    <Label pointing basic color="red" content={formik.errors.companyName}></Label>
                ) : null}

                <Form.Input label="Starting Date" fluid id="startingDate" name="startingDate" type="date" placeholder="Starting Date" onChange={formik.handleChange} onBlur={formik.handleBlur}
                    defaultValue={jobExperience.startingDate} />
                {formik.touched.startingDate && formik.errors.startingDate ? (
                    <Label pointing basic color="red" content={formik.errors.startingDate}></Label>
                ) : null}

                <Form.Input label="End Date" fluid id="endDate" name="endDate" type="date" placeholder="End Date" onChange={formik.handleChange} onBlur={formik.handleBlur}
                    defaultValue={jobExperience.endDate} />
                {formik.touched.endDate && formik.errors.endDate ? (
                    <Label pointing basic color="red" center content={formik.errors.endDate}></Label>
                ) : null}

                <Form.Input label="Resume Id" fluid id="resumeId" name="resumeId" type="text" placeholder="Resume Id" onChange={formik.handleChange} onBlur={formik.handleBlur}
                    value={formik.values.resumeId} />
                {formik.touched.resumeId && formik.errors.resumeId ? (
                    <Label pointing basic color="red" content={formik.errors.resumeId}></Label>
                ) : null}

                <br />

                <Button color="purple" type="submit">Update</Button>

            </form>
        </div>

    );
}