import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import JobPositionService from "../services/jobPositionService";
import WorkingTimeService from "../services/workingTimeService";
import WorkingTypeService from "../services/workingTypeService";
import { Form, Button, Label, Header } from "semantic-ui-react"
import { toast } from "react-toastify";
import * as Yup from "yup"
import {proxy} from "../../package.json"
import GraduateService from '../services/graduateService';
import EducationService from "../services/graduateService";


export default function EducationAdd() {

    const [graduateTypes, setgraduateTypes] = useState([]);

    useEffect(() => {
        const graduateService = new GraduateService();
        graduateService.getGraduates()
            .then((result) => setgraduateTypes(result.data.data));
        console.log(graduateTypes)
    }, []);

    const graduateTypesOptions = graduateTypes.map((graduateType, index) => ({
        key: index,
        text: graduateType.description,
        value: graduateType.id
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
        schoolName: Yup.string().required("School Name information is required!"),
        schoolDepartment: Yup.string().required("School Department information is required!"),
        startingDate: Yup.date().required("Starting Date information is required!"),
        endDate: Yup.date().required("End Date information is required!"),
        graduateTypeId: Yup.number().required("GraduateType information is required"),
        
    });

    const initialValues = {
        schoolName: "", schoolDepartment: "", startingDate: "", endDate: "", graduateTypeId: "",
    };

    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
        console.log(proxy);
        console.log(values);
          

        let education = {  
            schoolName: values.schoolName,
            schoolDepartment: values.schoolDepartment,
            startingDate: values.startingDate,
            endDate: values.endDate,
            graduateType: { id:values.graduateTypeId},
            
        };
        console.log(education);
        let educationService = new EducationService();
    
        educationService
      .addEducationDto(values)        
            .then(result => {
                toast.success("Education has been successfully added.")                
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
                Education Add
            </Header>
            <Form.Select
                fluid
                label="Graduate Type"
                placeholder='Select Graduate Type'
                name="graduateTypeId"
                options={graduateTypesOptions}
                value={formik.values.graduateTypeId}
                onChange={(e, { name, value }) => formik.setFieldValue(name, value)}
            />
            {formik.touched.graduateTypeId && formik.errors.graduateTypeId ? (                
                <Label pointing basic color="red" content={formik.errors.graduateTypeId}></Label>
            ) : null}


            <Form.Input label="School Name" fluid id="schoolName" name="schoolName" type="text" placeholder="School Name" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.schoolName} />
            {formik.touched.schoolName && formik.errors.schoolName ? (                
                <Label pointing basic color="red" content={formik.errors.schoolName}></Label>
            ) : null}


            <Form.Input label="School Department" fluid id="schoolDepartment" name="schoolDepartment" type="text" placeholder="School Department" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.schoolDepartment} />
            {formik.touched.schoolDepartment && formik.errors.schoolDepartment ? (                
                <Label pointing basic color="red" content={formik.errors.schoolDepartment}></Label>
            ) : null}


            <Form.Input label="Starting Date" fluid id="startingDate" name="startingDate" type="date" placeholder="Starting Date" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.startingDate} />
            {formik.touched.startingDate && formik.errors.startingDate ? (
                <Label pointing basic color="red" content={formik.errors.startingDate}></Label>
            ) : null}


            <Form.Input label="End Date" fluid id="endDate" name="endDate" type="date" placeholder="End Date" onChange={formik.handleChange} onBlur={formik.handleBlur}
                value={formik.values.endDate} />
            {formik.touched.endDate && formik.errors.endDate ? (                
                <Label pointing basic color="red" center content={formik.errors.endDate}></Label>
            ) : null}        


            <Button color="purple" type="submit">Save</Button>
        </form>

    );
}