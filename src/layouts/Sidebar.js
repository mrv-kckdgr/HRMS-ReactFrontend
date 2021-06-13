import React from "react";
import { Menu } from 'semantic-ui-react'
import JobPositions from "./JobPositions";
import Cities from "./Cities";
import { Divider } from "semantic-ui-react";
import Graduate from "./Graduate";

export default function Sidebar() {
  return (
    <div>
      <Menu vertical>
        <Menu.Item>
          <JobPositions/>
          <Divider horizontal></Divider>
          <Cities/>
          <Divider horizontal></Divider>
          <Graduate/>
        </Menu.Item>
      </Menu>
    </div>
  );
}
