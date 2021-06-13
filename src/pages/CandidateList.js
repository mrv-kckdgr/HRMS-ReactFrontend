import React, { useState, useEffect } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import CandidateService from "../services/candidateService";

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
  });
  return (
    <div>
      {candidates.map((candidate) => (
        <Card fluid color={'olive'}>
          <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              {candidate.firstName} {candidate.lastName}
            </Card.Header>
            <Card.Meta>
              <span className="date">{candidate.dateOfBirth}</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
