import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";
import WorkingTimeService from "../services/workingTimeService";
import WorkingTypeService from "../services/workingTypeService";
import { Form, Button, Label, Header } from "semantic-ui-react"
import { toast } from "react-toastify";
import * as Yup from "yup"
import { proxy } from "../../package.json"
import JobPostingService from "../services/jobPostingService"


export default function JobPostingAdd() {

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


    const validationSchema = Yup.object({
        applicationDeadline: Yup.date().required("Application deadline information is required!"),
        maxSalary: Yup.number().required("Maximum salary information is required!"),
        minSalary: Yup.number().required("Minimum salary information is required!"),
        numberOfPosition: Yup.number().required("Position piece information is required!"),
        releaseDate: Yup.date().required("Release date information is required"),
        jobPositionId: Yup.number().required("Job position field is required!"),
        cityId: Yup.number().required("City field is required!"),
        employerId: Yup.number().required("Employer field is required!"),
        workingTimeId: Yup.number().required("Working time is required!"),
        workingTypeId: Yup.number().required("Working type field is required")
    });

    const initialValues = {
        applicationDeadline: "", maxSalary: "", minSalary: "", numberOfPosition: "", releaseDate: "",
        cityId: "", jobPositionId: "", workingTypeId: "", workingTimeId: "", status: false, employerId: 1,
    };

    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
        console.log(proxy);
        console.log(values);


        let jobPosting = {
            applicationDeadline: values.applicationDeadline,
            maxSalary: values.maxSalary,
            minSalary: values.minSalary,
            numberOfPosition: values.numberOfPosition,
            releaseDate: values.releaseDate,
            city: { id: values.cityId },
            jobPosition: { id: values.jobPositionId },
            workingType: { id: values.workingTypeId },
            workingTime: { id: values.workingTimeId },
            status: values.status,
            employer: { id: values.employerId }
        };
        console.log(jobPosting);
        let jobPostingService = new JobPostingService();

        jobPostingService
            .addJobPostingDto(values)
            .then(result => {
                toast.success("Job posting has been successfully added.")
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
                Add Job Posting
            </Header>
            <Form.Select
                fluid
                label="JobPosition"
                placeholder='Select JobPosition'
                name="jobPositionId"
                options={jobPositionsOptions}
                value={formik.values.jobPositionId}
                onChange={(e, { name, value }) => formik.setFieldValue(name, value)}
            //error={formik.touched.jobPositionId && formik.errors.jobPositionId ? formik.errors.jobPositionId : null}

            />
            {formik.touched.jobPositionId && formik.errors.jobPositionId ? (
                <Label pointing basic color="red" content={formik.errors.jobPositionId}></Label>
            ) : null}


            {/* <label htmlFor="maxSalary">Max Salary</label> */}
            <Form.Input label="Max Salary" fluid id="maxSalary" name="maxSalary" type="text" placeholder="Max Salary" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.maxSalary} />
            {formik.touched.maxSalary && formik.errors.maxSalary ? (
                <Label pointing basic color="red" content={formik.errors.maxSalary}></Label>
            ) : null}

            <Form.Input label="Min Salary" fluid id="minSalary" name="minSalary" type="text" placeholder="Min Salary" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.minSalary} />
            {formik.touched.minSalary && formik.errors.minSalary ? (
                <Label pointing basic color="red" content={formik.errors.minSalary}></Label>
            ) : null}


            <Form.Input label="Release Date" fluid id="releaseDate" name="releaseDate" type="date" placeholder="Release Date" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.releaseDate} />
            {formik.touched.releaseDate && formik.errors.releaseDate ? (
                <Label pointing basic color="red" content={formik.errors.releaseDate}></Label>
            ) : null}


            <Form.Input label="Application Deadline" fluid id="releaseDate" name="applicationDeadline" type="date" placeholder="Application Deadline" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.applicationDeadline} />
            {formik.touched.applicationDeadline && formik.errors.applicationDeadline ? (
                <Label pointing basic color="red" center content={formik.errors.applicationDeadline}></Label>
            ) : null}


            <Form.Input label="Number Of Position" fluid id="numberOfPosition" name="numberOfPosition" type="text" placeholder="Number Of Position" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.numberOfPosition} />
            {formik.touched.numberOfPosition && formik.errors.numberOfPosition ? (
                <Label pointing basic color="red" content={formik.errors.numberOfPosition}></Label>
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


            <Button color="purple" type="submit">Save</Button>
        </form>

    );
}