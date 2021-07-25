import React, { useState, useEffect } from "react";
import { Checkbox, Table } from "semantic-ui-react";
import GraduateService from "../services/graduateService";

export default function Graduate() {
  const [graduates, setGraduates] = useState([]);

  useEffect(() => {
    let graduateService = new GraduateService();
    graduateService
      .getGraduates()
      .then((result) => setGraduates(result.data.data));
  }, []);
  return (
    <div>
      <Table celled color={'violet'}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Graduate Type</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {graduates.map((graduate) => (
          <Table.Row key={graduate.id}>
            <Table.Cell>
              <Checkbox label={graduate.description} />
            </Table.Cell>
          </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
