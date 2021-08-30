import React, { useState } from "react";
import { Button, Card, Icon, Image, Header, Grid } from 'semantic-ui-react'
import EmployerService from "../../services/employerService";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function EmployerList() {

    const [employers, setEmployers] = useState([]);
    
    let employerService = new EmployerService();

    useEffect(() => {
        employerService.getEmployers()
            .then((result) => setEmployers(result.data.data));
    }, [])

    return (
        <div class="row">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
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
                </Grid.Row>
            </Grid>
        </div>
    )
}