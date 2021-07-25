import React from "react";
import CandidateList from "../pages/CandidateList";
import Sidebar from "./Sidebar";
import { Grid } from "semantic-ui-react";
import JobPostingList from "../pages/JobPostingApprovedList"
import Navi from "../layouts/Navi"
import EducationList from "../pages/EducationList";
import { Route } from "react-router";
import ResumeDetail from "../pages/ResumeDetail";
import CandidateAdd from "../pages/CandidateAdd";
import JobPostingAdd from "../pages/JobPostingAdd";
import SignUpForm from "../pages/SignUpForm";
import JobPostingDetail from "../pages/JobPostingDetail";
import EmployerAdd from "../pages/EmployerAdd";
import { ToastContainer } from "react-toastify";
import ResumeAdd from "../pages/ResumeAdd";
import SignInForm from "../pages/SignInForm";
import EmployerSignInForm from "../pages/EmployerSignInForm";
import CandidateSignInForm from "../pages/CandidateSignInForm";
import JobPostingUnapprovedList from "../pages/JobPostingUnapprovedList";
import EducationAdd from "../pages/EducationAdd";
import JobExperienceAdd from "../pages/JobExperienceAdd";
import TechnologyAdd from "../pages/TechnologyAdd";
import JobPositionAdd from "../pages/JobPositionAdd";

export default function Dashboard() {
  return (
    <div>
      <Navi/>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>          
          <Grid.Column width={4}>
            <Sidebar />            
          </Grid.Column>
          <Grid.Column width={12}>
            
            <Route exact path="/" component={JobPostingList}/>
            <Route exact path="/employer/job-posting-list" component={JobPostingList}/>
            <Route exact path="/employer/job-posting-list/:id" component={JobPostingDetail}/>
            <Route path="/candidate-list" component={CandidateList}/>
            <Route path="/education-list" component={EducationList}/>
            <Route path="/resume-detail/1" component={ResumeDetail}/>
            <Route path="/candidate-add" component={CandidateAdd}/>            
            <Route path="/sign-up" component={SignUpForm}/>
            <Route path="/job-position-add" component={JobPostingAdd}/>
            <Route path="/employer/job-posting/add" component={JobPostingAdd}/>
            <Route path="/candidate/add" component={CandidateAdd}/>
            <Route path="/employer/add" component={EmployerAdd}/>
            <Route path="/resume/add" component={ResumeAdd}/>
            <Route path="/sign-in" component={SignInForm}/>
            <Route path="/employer/employer-login" component={EmployerSignInForm}/>
            <Route path="/candidate/candidate-login" component={CandidateSignInForm}/>
            <Route path="/employer/home" component={JobPostingUnapprovedList}/>
            <Route path="/candidate/home" component={ResumeAdd}/>
            <Route path="/candidate/education-add" component={EducationAdd}/>
            <Route path="/candidate/jobExperience-add" component={JobExperienceAdd}/>
            <Route path="/candidate/technology-add" component={TechnologyAdd}/> 
            <Route path="/job-position/add" component={JobPositionAdd}/>           
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
