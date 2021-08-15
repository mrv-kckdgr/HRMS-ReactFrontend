import React, { useState, useEffect } from "react";
import { Card, Icon } from "semantic-ui-react";
import CandidateService from "../../services/candidateService";

export default function CandidateList() {

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
  }, []);

  return (
    <div>
      {candidates.map((candidate) => (
        <Card fluid color={'olive'}>
          
          <Card.Content>
            <Card.Header>
              <Icon name="address card" color="olive"/>
              {candidate.firstName} {candidate.lastName}
            </Card.Header>
            <Card.Meta>
              <Icon name="calendar alternate outline" color="teal"/>
              <span className="date">{candidate.dateOfBirth}</span>
            </Card.Meta>
            <Card.Description>
              <Icon name="mail" color="grey"/>
              {candidate.email}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" color="yellow"/>
              {candidate.nationalNumber}
            </a>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
