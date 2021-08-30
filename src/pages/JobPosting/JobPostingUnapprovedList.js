import React, { useState, useEffect } from "react";
import { Header, Icon, Button, Card, Label } from "semantic-ui-react";
import JobPostingService from "../../services/jobPostingService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import JobPostingPageable from "./JobPostingPageable";
import JobPostingSearch from "./JobPostingSearch";

export default function JobPostingUnapprovedList() {

  // arama sayfası için bu kodlar eklendi
  const [values, setFilter] = useState([])
  const filterJobPosting = (values) => {
    setFilter(values);
    console.log("İş ilanları listesi:", values)
  }

  const [valuesPageable, setPageable] = useState([])
  const pagebleJobPosting = (valuesPageable) => {
    setPageable(valuesPageable);
    console.log("İş ilanları listesi: ", valuesPageable)
  }

  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getAllJobPostings()
      .then((result) => setJobPostings(result.data.data));
  }, []);

  function activeJobPosting(id) {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .activeJobPosting(id)
      .then(result => {
        toast.success("Job posting activated successfully");
      }, [])
  }

  function closeJobPosting(id) {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .closeJobPosting(id)
      .then(result => {
        toast.success("Job posting successfully deactivated");
      }, [])
  }

  useEffect(() => {
    let cityId = values.cityId;
    let jobPositionId = values.jobPositionId;
    let workingTimeId = values.workingTimeId;
    let workingTypeId = values.workingTypeId;

    let jobPostingService = new JobPostingService();
    jobPostingService.getByCityAndJobPositionAndWorkingTimeAndWorkingType(cityId, jobPositionId, workingTimeId, workingTypeId)
      .then((result) => {
        setJobPostings(result.data.data)
        toast.success("Job postings list has been successfully filtered.")
      });
  }, [values])


  useEffect(() => {
    let pageNo = valuesPageable.pageNo;
    let pageSize = valuesPageable.pageSize;
    let jobPostingService = new JobPostingService();
    jobPostingService.getAllPageableJobPostings(pageNo, pageSize)
      .then((result) => {
        setJobPostings(result.data.data)
        toast.success("Job postings list has been successfully pageable.")
      });
  }, [valuesPageable])

  const [currentPage, setCurrentPage] = useState(1)
  const [jobPostingsPerPage] = useState(10)

  // Get current jobPostings
  const indexOfLastJobPosting = currentPage*jobPostingsPerPage;
  const indexOfFirstJobPosting = indexOfLastJobPosting - jobPostingsPerPage;
  const currentJobPostings = jobPostings.slice(indexOfFirstJobPosting, indexOfLastJobPosting)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>

      <Header as='h3' block color="teal">
        All Employees
      </Header>

      <Link to="/employee/employee-list">
        <Button color="purple" type="submit">Employees List</Button><br/><br/>
      </Link>

      <Header as='h3' block color="blue">
        All Employers
      </Header>

      <Link to="/employee/employer-list">
        <Button color="yellow" type="submit">Employers List</Button><br/><br/>
      </Link>

      <JobPostingSearch filterJobPosting={filterJobPosting} />

      {/* <JobPostingPageable pagebleJobPosting={pagebleJobPosting}/> */}

      <JobPostingPageable pagebleJobPosting={pagebleJobPosting} totalJobPostings={jobPostings.length} paginate={paginate}/>


     

      <Header as='h3' block color="green">
        All Job Postings (Unapproved/Approved)
      </Header>

      {jobPostings.map((jobPosting) => (
        <Card.Group>

          <Card fluid>
            <Link to={`/employee/jobPosting-update/${jobPosting.id}`}>
              <Button fluid>
                <Icon name="edit" />
                Update</Button>
            </Link>
            <Card.Content>
              <Icon name='location arrow' color="teal" right className="ui.icon"
                size="big" /> {jobPosting.city.cityName}

              <Card.Header>
                {jobPosting.jobPosition.position}
              </Card.Header>
              <Card.Meta>
                {jobPosting.employer.companyName}
              </Card.Meta>
              <Card.Description>
                Web Address: {jobPosting.employer.webAddress}{" "}<br />
                Number of position: <strong>{jobPosting.numberOfPosition}</strong><br />
                Working Type: <strong>{jobPosting.workingType.workingType}</strong><br />
                Working Time: <strong>{jobPosting.workingTime.workingTime}</strong><br />
                Status: {jobPosting.status == true ? <Label style={{ backgroundColor: 'blue', alignSelf: 'flex-start', color: '#fff' }}>
                  Aktif
                </Label> : <Label style={{ backgroundColor: 'red', alignSelf: 'flex-start', color: '#fff' }}>
                  Pasif
                </Label>}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button.Group
              >

                <Button positive color="green"
                  onClick={() => activeJobPosting(jobPosting.id)}
                >
                  <Icon name='check' />
                  Approve
                </Button>
                <Button negative color="red"
                  onClick={() => closeJobPosting(jobPosting.id)}
                > <Icon name='close' />
                  Decline
                </Button>
              </Button.Group>


            </Card.Content>
          </Card>
        </Card.Group>
      ))}
    </div>
  );
}
