import React, { useState, useEffect } from "react";
import { Header, Icon, Menu, Table } from "semantic-ui-react";
import JobPostingService from "../services/jobPostingService";
import { Button, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function JobPostingApprovedList() {

  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getByStatus()
      .then((result) => setJobPostings(result.data.data));
  }, []);
  return (
    <div>
      <Header as='h3' block>
        Approved Job Postings
      </Header>
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
                <Link to={`/job-posting-list/${jobPosting.id}`}>{jobPosting.employer.companyName}</Link>
              </Table.Cell>
              <Table.Cell>
                {jobPosting.employer.webAddress}
              </Table.Cell>
              <Table.Cell>{jobPosting.jobPosition.position}</Table.Cell>
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
                {jobPosting.jobPosition.position}
              </Card.Header>
              <Card.Meta>
                {jobPosting.employer.companyName}
              </Card.Meta>
              <Card.Description>
                {jobPosting.employer.webAddress}{" "}
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
