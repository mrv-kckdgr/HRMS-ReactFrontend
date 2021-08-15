import React, { useState } from "react";
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import EmployeeService from "../../services/employeeService";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";

export default function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        let employeeService = new EmployeeService();
        employeeService.getEmployees()
            .then((result) => setEmployees(result.data.data));
    }, [])
    return (
        <div>
            {employees.map((employee) => (


                <Card>
                    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{employee.firstName} {employee.lastName}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{employee.email}</span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>

                            <Link to={`/employee/update/${employee.id}`}>
                                <Button icon color="purple" type="submit"><Icon name='edit' /> Update</Button>
                            </Link>
                        </a>
                    </Card.Content>
                </Card>
            ))}
        </div>
    )
}