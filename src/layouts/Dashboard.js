import React from "react";
import CandidateList from "../pages/CandidateList";
import Sidebar from "./Sidebar";
import { Grid } from "semantic-ui-react";
import JobPostingList from "../pages/JobPostingList"
import Navi from "../layouts/Navi"
import EducationList from "../pages/EducationList";


export default function Dashboard() {
  return (
    <div>
      <Navi/>
      <Grid>
        <Grid.Row>          
          <Grid.Column width={4}>
            <Sidebar />            
          </Grid.Column>
          <Grid.Column width={12}>
            <JobPostingList />
            <CandidateList />
            <EducationList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
