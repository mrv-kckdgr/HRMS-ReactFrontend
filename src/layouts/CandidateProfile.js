import React from "react";
import { Dropdown } from "semantic-ui-react";

export default function CandidateProfile() {
  return (
    <div className="dropdown">      
        <Dropdown item text="Profile">
          <Dropdown.Menu>
            <Dropdown.Item>My Profile</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign In</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>      
    </div>
  );
}
