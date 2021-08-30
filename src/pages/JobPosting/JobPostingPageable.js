import React from 'react';
import { Button, Container, Segment, Form, Label, Icon, Header, Pagination, PaginationItem } from "semantic-ui-react";
import { useFormik } from 'formik';
import * as Yup from "yup"

export default function JobPostingPageable({ pagebleJobPosting, totalJobPostings, paginate}) {

    const pageNumbers = [];
    const validationSchema = Yup.object({
        pageNo: Yup.number().required("Page number field is required!"),
        pageSize: Yup.number().required("Page size field is required!"),
    });

    for (let i = 1; i <= Math.ceil(totalJobPostings / pagebleJobPosting.pageNo); i++) {
        pageNumbers.push(i)
        console.log(pageNumbers)
    }

    const initialValues = {
        pageNo: "",
        pageSize: 10
    };

    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);
        let pageSize = values.pageSize;
        pagebleJobPosting(values);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    const countryOptions = [
        { key: '10', value: '5', text: '10' },
        { key: '20', value: '7', text: '20' },
        { key: '50', value: '10', text: '30' },
        { key: '100', value: '100', text: '100' }
    ]
    return (
        <div>
            <div>
           
            </div>
            <form
                onSubmit={formik.handleSubmit}>
                <Segment>
                    <Container textAlign='left'>

                        <Header as='h3' block color="teal">
                            Pageable Job Postings
                        </Header>


                        <Form.Select
                            fluid
                            label="Page Size"
                            placeholder='Select Page Size'
                            name="pageSize"
                            options={countryOptions}
                            value={formik.values.pageSize}
                            onChange={(e, { name, value }) => formik.setFieldValue(name, value)}
                        />
                        {formik.touched.jobPositionId && formik.errors.jobPositionId ? (
                            <Label pointing basic color="red" content={formik.errors.jobPositionId}></Label>
                        ) : null}

                        <Form.Input label="Page Number" fluid id="pageNo" name="pageNo" type="number" placeholder="Page Number" onChange={formik.handleChange} onBlur={formik.handleBlur}
                            value={formik.values.pageNo} />
                        {formik.touched.pageNo && formik.errors.pageNo ? (
                            <Label pointing basic color="red" content={formik.errors.pageNo}></Label>
                        ) : null}

                        <br />

                        <Button color="yellow" type="submit" width={4} size="medium"
                        ><Icon name="sort numeric descending" color="red" size="large" />
                            Pageable</Button>
                        <br />
                    </Container>
                </Segment>
            </form>
        </div>
    )
}