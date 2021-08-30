import React, { useState, useEffect } from "react";
import { Header, Icon } from "semantic-ui-react";
import JobPostingService from "../../services/jobPostingService";
import { Button, Card } from "semantic-ui-react";
import FavoriteJobPostingService from "../../services/favoriteJobPostingService";
import { toast } from "react-toastify";
import JobPostingSearch from "./JobPostingSearch";
import JobPostingPageable from "./JobPostingPageable";

export default function JobPostingApprovedList() {

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
      .getByStatus()
      .then((result) => setJobPostings(result.data.data));
  }, []);

  useEffect(() => {
    let cityId = values.cityId;
    let jobPositionId = values.jobPositionId;
    let workingTimeId = values.workingTimeId;
    let workingTypeId = values.workingTypeId;

    let jobPostingService = new JobPostingService();
    jobPostingService.getByCityAndJobPositionAndWorkingTimeAndWorkingType(cityId, jobPositionId, workingTimeId, workingTypeId)
      .then((result) => setJobPostings(result.data.data));
  }, [values])


  useEffect(() => {
    let pageNo = valuesPageable.pageNo;
    let pageSize = valuesPageable.pageSize;
    let jobPostingService = new JobPostingService();
    jobPostingService.getAllPageableJobPostings(pageNo, pageSize)
      .then((result) => setJobPostings(result.data.data));
  }, [valuesPageable])


  function addFavoriteJobPosting(id) {
    let favoriteJobPostingService = new FavoriteJobPostingService();
    let candidateId = 4;
    let jobPostingId = id;
    let model = { candidateId, id };
    console.log(model)
    favoriteJobPostingService.addFavoriteJobPostingDto(candidateId, jobPostingId)
      .then(result => {
        toast.success("FavoriteJobPosting has been successfully added.")
        console.log(result)
      })

  }

  const [currentPage, setCurrentPage] = useState(1)
  const [jobPostingsPerPage] = useState(10)

  // Get current jobPostings
  const indexOfLastJobPosting = currentPage * jobPostingsPerPage;
  const indexOfFirstJobPosting = indexOfLastJobPosting - jobPostingsPerPage;
  const currentJobPostings = jobPostings.slice(indexOfFirstJobPosting, indexOfLastJobPosting)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div>
      <JobPostingSearch filterJobPosting={filterJobPosting} />

      <JobPostingPageable pagebleJobPosting={pagebleJobPosting} totalJobPostings={jobPostings.length} paginate={paginate} />

      <Header as='h3' block color="orange">
        Approved Job Postings
      </Header>

      {jobPostings.map((jobPosting) => (

        <Card.Group>
          <Card fluid>
            <Card.Content>
              <Card.Header>
                <Icon name="computer" color="green" size="large" />
                Job Position: {jobPosting.jobPosition.position}
              </Card.Header>
              <Card.Description>
                <Icon name="hospital" color="teal" size="large" />
                Company Name: {jobPosting.employer.companyName}
              </Card.Description>
              <Card.Description>
                <Icon name="world" color="purple" size="large" />
                Web Address: {jobPosting.employer.webAddress}{" "}<br />
                <Icon name="sort numeric ascending" color="blue" size="large" />
                <strong>Number of Position: {jobPosting.numberOfPosition}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">

                <Button basic color="green">
                  <Icon name="external" />
                  Detail
                </Button>

                <Button basic color="red" type="submit" onClick={() => addFavoriteJobPosting(jobPosting.id)}>
                  <Icon name="heart" />
                  Add Favorite
                </Button>

              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      ))}
    </div>
  );
}
