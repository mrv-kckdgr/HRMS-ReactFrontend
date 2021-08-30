import React, { useState } from "react";
import { Button, Card, Icon, Image, Header, Grid } from 'semantic-ui-react'
import EmployerService from "../../services/employerService";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AllEmployerList() {

    const [employers, setEmployers] = useState([]);
    const [unapprovedEmployers, setUnapprovedEmployers] = useState([]);
    let employerService = new EmployerService();

    useEffect(() => {
        employerService.getEmployers()
            .then((result) => setEmployers(result.data.data));
    }, [])

    useEffect(() => {
        employerService.getByUnapprovedEmployer()
            .then((result) => setUnapprovedEmployers(result.data.data));
    }, [])

    function approveEmployer(id) {
        employerService.approveEmployer(id)
            .then(
                toast.success("İşveren HRMS personeli tarafından onaylandı. İşveren onay durumu Onaylandı olarak değiştirildi.")
            )
    }
    return (
        <div class="row">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' block color="orange">
                            Approved Employers
                        </Header>
                        <div class="ui centered cards"><div class="ui card"><div class="content">
                            {employers.map((employer) => (
                                <Card>
                                    <Card.Content>
                                        <Card.Header><Icon name="hospital" size="large" color="blue"></Icon> {employer.companyName}</Card.Header>
                                        <Card.Description>{employer.webAddress}</Card.Description>
                                        <Card.Meta>
                                            <span className='date'><Icon name="mail" size="large" color="red"></Icon> {employer.email}</span>
                                        </Card.Meta>                                        
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>

                                            <Link to={`/employer/employer-update/${employer.id}`}>
                                                <Button icon color="olive" type="submit"><Icon name='edit' /> Update</Button>
                                            </Link>
                                        </a>
                                    </Card.Content>
                                </Card>
                            ))}
                        </div></div></div>

                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header as='h3' block color="violet">
                            Unapproved Employers
                        </Header>
                        <div class="ui centered cards"><div class="ui card"><div class="content">
                            {unapprovedEmployers.map((employer) => (
                                <Card>
                                    <Card.Content>
                                        <Card.Header><Icon name="hospital" size="large" color="blue"></Icon> {employer.companyName}</Card.Header>
                                        <Card.Description>{employer.webAddress}</Card.Description>
                                        <Card.Meta><Icon name="mail" size="large" color="red"></Icon>
                                            <span className='date'>{employer.email}</span>
                                        </Card.Meta>                                        
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>

                                            <Link to={`/employer/employer-update/${employer.id}`}>
                                                <Button icon color="pink" type="submit"><Icon name='edit' /> Update</Button>
                                            </Link>
                                        </a>


                                        <Button icon color="orange" type="submit" onClick={() => approveEmployer(employer.id)}><Icon name='check' /> Approve</Button>

                                    </Card.Content>
                                </Card>
                            ))}
                        </div></div></div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}