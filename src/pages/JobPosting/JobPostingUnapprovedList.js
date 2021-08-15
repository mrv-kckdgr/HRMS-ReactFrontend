import React, { useState, useEffect } from "react";
import { Header, Icon, Button, Card, Label } from "semantic-ui-react";
import JobPostingService from "../../services/jobPostingService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function JobPostingUnapprovedList() {

  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getJobPostings()
      .then((result) => setJobPostings(result.data.data));
  }, []);

  function activeJobPosting(id) {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .activeJobPosting(id)
      .then(result => {
        toast.success("Job posting activated successfully");
      }, [])
  }

  function closeJobPosting(id) {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .closeJobPosting(id)
      .then(result => {
        toast.success("Job posting successfully deactivated");
      }, [])
  }


  return (
    <div>

      <Header as='h3' block color="teal">
        All Employees
      </Header>

      <Link to="/employee/employee-list">
        <Button color="purple" type="submit">Employees List</Button>
      </Link>

      <Header as='h3' block color="green">
        All Job Postings (Unapproved/Approved)
      </Header>

      {jobPostings.map((jobPosting) => (
        <Card.Group>

          <Card fluid>
            <Link to={`/employee/jobPosting-update/${jobPosting.id}`}>
              <Button fluid>
                <Icon name="edit" />
                Update</Button>
            </Link>
            <Card.Content>
              <Icon name='location arrow' color="teal" right className="ui.icon"
                size="big" /> {jobPosting.cityName}

              <Card.Header>
                {jobPosting.jobPosition.position}
              </Card.Header>
              <Card.Meta>
                {jobPosting.employer.companyName}
              </Card.Meta>
              <Card.Description>
                Web Address: {jobPosting.employer.webAddress}{" "}<br />
                Number of position: <strong>{jobPosting.numberOfPosition}</strong><br />
                Working Type: <strong>{jobPosting.workingType}</strong><br />
                Working Time: <strong>{jobPosting.workingTime}</strong><br />
                Status: {jobPosting.status == true ? <Label style={{ backgroundColor: 'blue', alignSelf: 'flex-start', color: '#fff' }}>
                  Aktif
                </Label> : <Label style={{ backgroundColor: 'red', alignSelf: 'flex-start', color: '#fff' }}>
                  Pasif
                </Label>}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button.Group
              >

                <Button positive color="green"
                  onClick={() => activeJobPosting(jobPosting.id)}
                >
                  <Icon name='check' />
                  Approve
                </Button>
                <Button negative color="red"
                  onClick={() => closeJobPosting(jobPosting.id)}
                > <Icon name='close' />
                  Decline
                </Button>
              </Button.Group>


            </Card.Content>
          </Card>
        </Card.Group>
      ))}
    </div>
  );
}