import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import { Table, Menu, Icon, Divider } from 'semantic-ui-react'
import EducationService from '../services/educationService'

export default function EducationList() {
    const [educations, setEducations] = useState([])
    useEffect(()=>{
        let educationService = new EducationService()
        educationService.getEducations().then(result=>setEducations(result.data.data))
    }, [])
    return (
        <div>
            <Divider horizontal></Divider>
    <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>School Name</Table.HeaderCell>
            <Table.HeaderCell>School Depertment</Table.HeaderCell>
            <Table.HeaderCell>Starting Date</Table.HeaderCell>
            <Table.HeaderCell>Graduate Type</Table.HeaderCell>            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {educations.map((education) => (
            <Table.Row key={education.id}>
              <Table.Cell>{education.schoolName}</Table.Cell>
              <Table.Cell>{education.schoolDepartment}</Table.Cell>              
              <Table.Cell>{education.startingDate}</Table.Cell>
              <Table.Cell>{education.graduateType.description}</Table.Cell>  
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>        
    
        </div>
    )
}
