import React from "react";
import { Button, Menu, Container } from "semantic-ui-react";
import SearchJobPositions from "./SearchJobPositions";
import CandidateProfile from "./CandidateProfile";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" size="large" color={'pink'}>
        <Container>
          <Menu.Menu position="left">
          <Menu.Item name="home" />
          <Menu.Item name="about" />
            <SearchJobPositions />
          </Menu.Menu> 
          <Menu.Menu>
            <Menu.Item>
            
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
          <CandidateProfile/>
            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>

        </Container>
      </Menu>
    </div>
  );
}
