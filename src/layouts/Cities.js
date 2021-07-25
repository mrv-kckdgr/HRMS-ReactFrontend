import React, { useState, useEffect } from "react";
import CityService from "../services/cityService";
import { Table } from "semantic-ui-react";

export default function Cities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  },[]);
  return <div>
      
      <Table celled color={'pink'}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>City Name</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cities.map((city) => (
            <Table.Row key={city.id}>
              <Table.Cell><a href={city.cityName}>{city.cityName}</a></Table.Cell>
              
            </Table.Row>
          ))}
        </Table.Body>        
      </Table>

  </div>;
}
