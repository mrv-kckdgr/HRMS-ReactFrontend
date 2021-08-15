import React, { useEffect, useState } from 'react';
import EducationService from '../../services/educationService';
import { Item, Icon, Button, Header, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import LanguageService from '../../services/languageService';
import JobExperienceService from '../../services/jobExperienceService';
import TechnologyService from '../../services/technologyService';


export default function ResumeUpdate() {

    const [educations, setEducations] = useState([])

    useEffect(() => {
        let educationService = new EducationService();
        educationService.getByResumeId(1)
            .then((result) => setEducations(result.data.data));
    })


    const [languages, setLanguages] = useState([])

    useEffect(() => {
        let languageService = new LanguageService();
        languageService.getByResumeId(1)
            .then((result) => setLanguages(result.data.data));
    })

    const [jobExperiences, setJobExperiences] = useState([])

    useEffect(() => {
        let jobExperienceService = new JobExperienceService();
        jobExperienceService.getByResumeId(1)
            .then((result) => setJobExperiences(result.data.data));
    })

    const [technologies, setTechnologies] = useState([])

    useEffect(() => {
        let technologyService = new TechnologyService();
        technologyService.getByResumeId(1)
            .then((result) => setTechnologies(result.data.data));
    })



    return (
        <div>
            <Header as='h3' block color="teal">Resume Update</Header>

            <Header as='h4' block color="teal">Education Informations
                <Link to="/candidate/education-add">
                    <Button floated='right' icon color="orange" type="submit" size="medium"><Icon name="plus" /> Add New Education</Button>
                </Link>
            </Header>
            <Item.Group>
                {educations.map((e) => (
                    <Item>
                        <Item.Content>
                            <Icon name="hospital" color="blue" size="large" />
                            <Item.Header as='a'>SchoolName: {e.schoolName}</Item.Header>
                            <Item.Description>SchoolDepartment: {e.schoolDepartment}</Item.Description>
                            <Item.Description>
                                Graduate Type: {e.graduateType.description}
                            </Item.Description>
                            <Item.Extra>
                                <Icon name="calendar alternate" color="teal" size="large" />
                                Start Date - End Date: {e.startingDate} - {e.endDate}
                            </Item.Extra>
                            <Item.Description>
                                <Link to={`/candidate/education-update/${e.id}`}>
                                    <Button floated='right' icon color="purple" type="submit"><Icon name="edit" /> Update</Button>
                                </Link>
                            </Item.Description>
                        </Item.Content>
                        <br /><br />
                    </Item>
                ))}
            </Item.Group>

            <Header as='h4' block color="teal">Language Informations
                <Link to="/candidate/language-add">
                    <Button floated='right' icon color="orange" type="submit" size="medium"><Icon name="plus" /> Add New Education</Button>
                </Link>
            </Header>

            <Item.Group>
                {languages.map((e) => (
                    <Item>
                        <Item.Content>
                            <Icon name="hospital" color="blue" size="large" />
                            <Item.Header as='a'>Language Name: {e.languageName}</Item.Header>
                            <Item.Description>Language Level: {e.languageLevel === "1" ? <Icon name="star" color="orange" />
                                : e.languageLevel === "2" ? <div floated><Icon name="star" color="orange" /><Icon name="star" color="orange" /></div>
                                    : e.languageLevel === "3" ? <div><Icon name="star" color="orange" /><Icon name="star" color="orange" /><Icon name="star" color="orange" /></div>
                                        : e.languageLevel === "4" ? <div><Icon name="star" color="orange" /><Icon name="star" color="orange" /><Icon name="star" color="orange" /><Icon name="star" color="orange" /></div>
                                            : e.languageLevel === "5" ? <div><Icon name="star" color="orange" /><Icon name="star" color="orange" /><Icon name="star" color="orange" /><Icon name="star" color="orange" /><Icon name="star" color="orange" /></div> : <Icon name="star" color="orange" />
                            }  </Item.Description>
                            <Item.Description>
                                <Link to={`/candidate/language-update/${e.id}`}>
                                    <Button floated='right' icon color="purple" type="submit"><Icon name="edit" /> Update</Button>
                                </Link>
                            </Item.Description>
                        </Item.Content>
                        <br /><br />
                    </Item>
                ))}

            </Item.Group>

            <Header as='h4' block color="teal">Job Experience Informations
                <Link to="/candidate/jobExperience-add">
                    <Button floated='right' icon color="orange" type="submit" size="medium"><Icon name="plus" /> Add New Job Experience</Button>
                </Link>
            </Header>

            <Item.Group>
                {jobExperiences.map((jobExperience) => (
                    <Item>
                        <Item.Content>
                            <Icon name="hospital" color="blue" size="large" />
                            <Item.Header as='a'>Job Position Name: {jobExperience.jobPosition.position}</Item.Header>
                            <Item.Description>Company Name: {jobExperience.companyName}
                            </Item.Description>
                            <Item.Description>Starting Date: {jobExperience.startingDate}      End Date:  {jobExperience.endDate}
                            </Item.Description>
                            <Item.Description>
                                <Link to={`/candidate/jobExperience-update/${jobExperience.id}`}>
                                    <Button floated='right' icon color="purple" type="submit"><Icon name="edit" /> Update</Button>
                                </Link>
                            </Item.Description>
                        </Item.Content>
                        <br /><br />
                    </Item>
                ))}

            </Item.Group>


            <Header as='h4' block color="teal">Skills
                <Link to="/candidate/technology-add">
                    <Button floated='right' icon color="orange" type="submit" size="medium"><Icon name="plus" /> Add New Job Experience</Button>
                </Link>
            </Header>

            <Item.Group>
                {technologies.map((technology) => (
                    <Item>
                        <Item.Content>
                            <Label image color="green">
                                {technology.description}
                                <Icon name='delete' />
                            </Label>
                            <Item.Description>
                                <Link to={`/candidate/technology-update/${technology.id}`}>
                                    <Button floated='right' icon color="purple" type="submit"><Icon name="edit" /> Update</Button>
                                </Link>
                            </Item.Description>
                        </Item.Content>
                        <br /><br />
                    </Item>
                ))}

            </Item.Group>
        </div>
    )
}