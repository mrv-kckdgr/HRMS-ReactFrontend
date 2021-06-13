import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import JobPostingService from "../services/jobPostingService";
import { Button, Card, Image } from "semantic-ui-react";

export default function JobPostingList() {
  //Hook
  //Life cycle hook
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    //başarılı olursa then kısmı çalışacak
    jobPostingService
      .getJobPostings()
      .then((result) => setJobPostings(result.data.data));
    //bunu yapınca data geldi
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Company Web Addres</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
            <Table.HeaderCell>Number of Position</Table.HeaderCell>
            <Table.HeaderCell>Release Date</Table.HeaderCell>
            <Table.HeaderCell>Application Deadline</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPostings.map((jobPosting) => (
            <Table.Row key={jobPosting.id}>
              <Table.Cell>
                {jobPosting.employerCompanyName.companyName}
              </Table.Cell>
              <Table.Cell>
                {jobPosting.employerCompanyName.webAddress}
              </Table.Cell>
              <Table.Cell>{jobPosting.jobPositionPosition.position}</Table.Cell>
              <Table.Cell>{jobPosting.numberOfPosition}</Table.Cell>
              <Table.Cell>{jobPosting.releaseDate}</Table.Cell>
              <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
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
      {jobPostings.map((jobPosting) => (
        <Card.Group>
          <Card fluid>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src="/images/avatar/large/steve.jpg"
              />
              <Card.Header>
                {jobPosting.jobPositionPosition.position}
              </Card.Header>
              <Card.Meta>
                {jobPosting.employerCompanyName.companyName}
              </Card.Meta>
              <Card.Description>
                {jobPosting.employerCompanyName.webAddress}{" "}
                <strong>{jobPosting.numberOfPosition}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Approve
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      ))}
    </div>
  );
}
