import React, { useEffect, useState } from 'react';
import { Button, Container, Segment, Form, Label, Header } from "semantic-ui-react";
import { useFormik } from 'formik';
import * as Yup from "yup"
import CityService from '../../services/cityService';
import JobPositionService from '../../services/jobPositionService';
import WorkingTimeService from "../../services/workingTimeService";
import WorkingTypeService from "../../services/workingTypeService";

export default function JobPostingSearch({ filterJobPosting }) {

    const validationSchema = Yup.object({
        jobPositionId: Yup.number().required("Job position field is required!"),
        cityId: Yup.number().required("City field is required!"),
        workingTimeId: Yup.number().required("Working time is required!"),
        workingTypeId: Yup.number().required("Working type field is required")
    });

    const initialValues = {
        cityId: "", jobPositionId: "", workingTimeId: "", workingTypeId: ""
    };

    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);
        filterJobPosting(values);
    };

    const [workingTimes, setWorkingTimes] = useState([]);

    useEffect(() => {
        const workingTimeService = new WorkingTimeService();
        workingTimeService.getWorkingTimes()
            .then((result) => setWorkingTimes(result.data.data))
        console.log(workingTimes)
    }, [])


    const workingTimesOptions = workingTimes.map((time, index) => ({
        key: index,
        text: time.workingTime,
        value: time.id
    }))


    const [workingTypes, setWorkingTypes] = useState([]);

    useEffect(() => {
        const workingTypeService = new WorkingTypeService();
        workingTypeService.getWorkingTypes()
            .then((result) => setWorkingTypes(result.data.data))
        console.log(workingTypes)
    }, [])


    const workingTypesOptions = workingTypes.map((type, index) => ({
        key: index,
        text: type.workingType,
        value: type.id
    }))

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
        const jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions()
            .then((result) => setJobPositions(result.data.data))
        console.log(jobPositions)
    }, [])


    const jobPositionsOptions = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.position,
        value: jobPosition.id
    }))

    const [cities, setCities] = useState([]);

    useEffect(() => {
        const cityService = new CityService();
        cityService.getCities()
            .then((result) => setCities(result.data.data));
        console.log(cities)
    }, []);

    const citiesOptions = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.id
    }))


    return (
        <div>
            <Header as='h3' block color="olive">
                Filter Job Postings
            </Header>

            <form
                onSubmit={formik.handleSubmit}>
                <Segment>
                    <Container textAlign='left'>

                        <Form.Select
                            fluid
                            label="JobPosition"
                            placeholder='Select JobPosition'
                            name="jobPositionId"
                            options={jobPositionsOptions}
                            value={formik.values.jobPositionId}
                            onChange={(e, { name, value }) => formik.setFieldValue(name, value)}
                        />
                        {formik.touched.jobPositionId && formik.errors.jobPositionId ? (
                            <Label pointing basic color="red" content={formik.errors.jobPositionId}></Label>
                        ) : null}



                        <Form.Select
                            fluid
                            label="City"
                            placeholder='Select City'
                            name="cityId"
                            options={citiesOptions}
                            value={formik.values.cityId}
                            onChange={(e, { name, value }) => formik.setFieldValue(name, value)}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.cityId && formik.errors.cityId ? (
                            <Label pointing basic color="red" content={formik.errors.cityId}></Label>
                        ) : null}

                        <Form.Select
                            fluid
                            label="Working Time"
                            placeholder='Select Working Time'
                            name="workingTimeId"
                            options={workingTimesOptions}
                            value={formik.values.workingTimeId}
                            onChange={(e, { name, value }) => formik.setFieldValue(name, value)}
                            onBlur={formik.handleBlur}

                        />
                        {formik.touched.workingTimeId && formik.errors.workingTimeId ? (
                            <Label pointing basic color="red" content={formik.errors.workingTimeId}></Label>
                        ) : null}


                        <Form.Select
                            fluid
                            label="Working Type"
                            placeholder='Select Working Type'
                            name="workingTypeId"
                            options={workingTypesOptions}
                            value={formik.values.workingTypeId}
                            onChange={(e, { name, value }) => formik.setFieldValue(name, value)}
                            onBlur={formik.handleBlur}

                        />
                        {formik.touched.workingTypeId && formik.errors.workingTypeId ? (
                            <Label pointing basic color="red" center aligned content={formik.errors.workingTypeId}></Label>
                        ) : null}

                        <Button color="purple" type="submit" width={4}
                        >Filter</Button>
                    </Container>
                </Segment>
            </form>
        </div>
    )
}