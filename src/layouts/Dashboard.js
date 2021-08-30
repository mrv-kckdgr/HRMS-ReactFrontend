import React from "react";
import Sidebar from "./Sidebar";
import { Grid } from "semantic-ui-react";
import Navi from "../layouts/Navi"
import { Route } from "react-router";
import { ToastContainer } from "react-toastify";
import JobPostingUnapprovedList from "../pages/JobPosting/JobPostingUnapprovedList";
import ResumeDetail from "../pages/Resume/ResumeDetail";
import CandidateAdd from "../pages/Candidate/CandidateAdd";
import CandidateHome from "../pages/Candidate/CandidateHome";
import CandidateList from "../pages/Candidate/CandidateList";
import EmployeeAdd from "../pages/Employee/EmployeeAdd";
import EmployeeList from "../pages/Employee/EmployeeList";
import SignUpForm from "../pages/SignUpForm";
import EmployeeUpdate from "../pages/Employee/EmployeeUpdate";
import JobExperienceAdd from "../pages/JobExperience/JobExperienceAdd";
import LanguageUpdate from "../pages/Language/LanguageUpdate";
import TechnologyAdd from "../pages/Technology/TechnologyAdd";
import TechnologyUpdate from "../pages/Technology/TechnologyUpdate";
import JobPositionAdd from "../pages/JobPosition/JobPositionAdd";
import CandidateSignInForm from "../pages/Candidate/CandidateSignInForm";
import EducationUpdate from "../pages/Education/EducationUpdate";
import EducationList from "../pages/Education/EducationList";
import EducationAdd from "../pages/Education/EducationAdd";
import ResumeUpdate from "../pages/Resume/ResumeUpdate";
import ResumeList from "../pages/Resume/ResumeList";
import JobPostingList from "../pages/JobPosting/JobPostingUnapprovedList";
import JobPostingAdd from "../pages/JobPosting/JobPostingAdd";
import ResumeAdd from "../pages/Resume/ResumeAdd";
import EmployerList from "../pages/Employer/EmployerList";
import JobPostingDetail from "../pages/JobPosting/JobPostingDetail";
import EmployerSignInForm from "../pages/Employer/EmployerSignInForm";
import EmployerAdd from "../pages/Employer/EmployerAdd";
import EmployeeSignInForm from "../pages/Employee/EmployeeSignInForm";
import JobExperienceUpdate from "../pages/JobExperience/JobExperienceUpdate";
import SignInForm from "../pages/SignInForm";
import JobPostingApprovedList from "../pages/JobPosting/JobPostingApprovedList";
import JobPostingUpdate from "../pages/JobPosting/JobPostingUpdate";
import EmployerUpdate from "../pages/Employer/EmployerUpdate";
import AllEmployerList from "../pages/Employer/AllEmployerList";

export default function Dashboard() {
  return (
    <div>
      <Navi />
      <ToastContainer position="bottom-right" />
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>

            <Route exact path="/" component={JobPostingList} />


            {/* Employer */}
            <Route exact path="/employer/job-posting-list" component={JobPostingList} />
            <Route exact path="/employer/job-posting-list/:id" component={JobPostingDetail} />
            <Route path="/employer/job-posting/add" component={JobPostingAdd} />
            <Route path="/employer/employer-login" component={EmployerSignInForm} />
            <Route path="/employer/home" component={JobPostingUnapprovedList} />
            <Route path="/employer/add" component={EmployerAdd} />
            <Route path="/employer/employer-list" component={EmployerList} />
            <Route path="/employer/employer-update/:id" component={EmployerUpdate} />

            {/* Employee */}
            <Route path="/employee/employee-login" component={EmployeeSignInForm} />
            <Route path="/employee/employee-list" component={EmployeeList} />
            <Route path="/employee/home" component={JobPostingUnapprovedList} />
            <Route path="/employee/add" component={EmployeeAdd} />
            <Route path="/employee/update/:id" component={EmployeeUpdate} />
            <Route path="/employee/jobPosting-update/:id" component={JobPostingUpdate} />
            <Route path="/employee/employer-list" component={AllEmployerList} />


            {/* Candidate */}
            <Route path="/candidate/list" component={CandidateList} />
            <Route path="/candidate/add" component={CandidateAdd} />
            <Route path="/candidate/home" component={CandidateHome} />
            <Route path="/candidate/education-add" component={EducationAdd} />
            <Route path="/candidate/jobExperience-add" component={JobExperienceAdd} />
            <Route path="/candidate/jobExperience-update/:id" component={JobExperienceUpdate} />
            <Route path="/candidate/technology-add" component={TechnologyAdd} />
            <Route path="/candidate/technology-update/:id" component={TechnologyUpdate} />
            <Route path="/candidate/candidate-login" component={CandidateSignInForm} />
            <Route path="/candidate/language-update/:id" component={LanguageUpdate} />
            <Route path="/candidate/education-update/:id" component={EducationUpdate} />
            <Route path="/candidate/job-posting-list" component={JobPostingApprovedList} />


            {/* Education */}
            <Route path="/education/list" component={EducationList} />
            <Route path="/education/add" component={EducationAdd} />


            {/* Resume */}
            <Route path="/resume/add" component={ResumeAdd} />
            <Route path="/resume/list" component={ResumeList} />
            <Route path="/resume/resume-detail/1" component={ResumeDetail} />
            <Route path="/resume/update/1" component={ResumeUpdate} />


            {/* Login - Logout */}
            <Route path="/sign-up" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />


            {/* Job Posting */}
            <Route path="/job-posting/add" component={JobPostingAdd} />


            {/* Job Position */}
            <Route path="/job-position/add" component={JobPositionAdd} />


            {/* Language */}
            <Route path="/language/update" component={LanguageUpdate} />           

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
