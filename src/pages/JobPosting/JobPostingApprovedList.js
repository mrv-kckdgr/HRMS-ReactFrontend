import React, { useState, useEffect } from "react";
import { Header, Icon, Menu, Table } from "semantic-ui-react";
import JobPostingService from "../../services/jobPostingService";
import { Button, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import FavoriteJobPostingService from "../../services/favoriteJobPostingService";
import { toast } from "react-toastify";

export default function JobPostingApprovedList() {

  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getByStatus()
      .then((result) => setJobPostings(result.data.data));
  }, []);

  function addFavoriteJobPosting(id) {
    let favoriteJobPostingService = new FavoriteJobPostingService();
    let candidateId = 4;
    let jobPostingId = id;
    let model = { candidateId, id };
    console.log(model)
    favoriteJobPostingService.addFavoriteJobPostingDto(candidateId, jobPostingId)
      .then(result => {
        toast.success("FavoriteJobPosting has been successfully added.")
        console.log(result)
      }, [])

  }
  return (
    <div>
      <Header as='h3' block color="orange">
        Approved Job Postings
      </Header>

      {jobPostings.map((jobPosting) => (

        <Card.Group>
          <Card fluid>
            <Card.Content>
              <Card.Header>
                <Icon name="computer" color="green" size="large" />
                Job Position: {jobPosting.jobPosition.position}
              </Card.Header>
              <Card.Description>
                <Icon name="hospital" color="teal" size="large" />
                Company Name: {jobPosting.employer.companyName}
              </Card.Description>
              <Card.Description>
                <Icon name="world" color="purple" size="large" />
                Web Address: {jobPosting.employer.webAddress}{" "}<br />
                <Icon name="sort numeric ascending" color="blue" size="large" />
                <strong>Number of Position: {jobPosting.numberOfPosition}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">

                <Button basic color="green">
                  <Icon name="external" />
                  Detail
                </Button>

                <Button basic color="red" type="submit" onClick={() => addFavoriteJobPosting(jobPosting.id)}>
                  <Icon name="heart" />
                  Add Favorite
                </Button>

              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      ))}
    </div>
  );
}
