import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import JobPostingService from "../../services/jobPostingService";
import { Card, Icon, Label, Button } from "semantic-ui-react";

export default function JobPostingDetail() {

  let { id } = useParams()

  const [jobPosting, setJobPosting] = useState({});

  useEffect(() => {
    let jobPostingService = new JobPostingService()
    jobPostingService.getById(id).then(result => setJobPosting(result.data.data))
  }, [])

  return (
    <div>
      Job Posting : {id}
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Icon name='location arrow' color="teal" right className="ui.icon"
              size="big" /> {jobPosting.cityName}
            <Card.Header>
              <Icon name="money" size="large" />{jobPosting.maxSalary}₺ - {jobPosting.minSalary}₺
            </Card.Header>
            <Card.Meta>{jobPosting.jobPosition.position}</Card.Meta>
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
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}