import React, { useState, useEffect } from "react";
import ResumeService from "../../services/resumeService";

export default function ResumeList() {

    const [resumes, setResumes] = useState([]);

    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService.getAllResumes()
            .then((result) => setResumes(result.data.data));
    }, []);

    return (
        // <div>
        //     <Header as='h2' block color="purple">
        //         Resume Details
        //     </Header>
        //     {resumes.map((resume) => (

        //         <Card fluid color={'olive'}>
        //             <Header as='h3' block color="purple">
        //                 Candidate Profile Details
        //             </Header>
        //             <Card.Content>
        //                 <Card.Header>
        //                     <Icon name="address card" color="olive" />
        //                     {resume.candidate.firstName} {resume.candidate.lastName}
        //                 </Card.Header>
        //                 <Card.Description>
        //                     <Icon name="calendar alternate outline" color="teal" />
        //                     <span className="date"> {resume.candidate.dateOfBirth}</span>
        //                 </Card.Description>
        //                 <Card.Description>
        //                     <Icon name="mail" color="grey" size="large" />
        //                     {resume.candidate.email}
        //                 </Card.Description>
        //                 <Card.Description>
        //                     <Icon name="github" color="purple" size="large" />
        //                     {resume.githubLink}
        //                 </Card.Description>
        //                 <Card.Description>
        //                     <Icon name="linkedin" color="blue" size="large" />
        //                     {resume.linkedlnLink}
        //                 </Card.Description>                        
        //             </Card.Content>
        //             <Card.Content extra>
        //                 <a>
        //                     <Icon name="user" color="yellow" />
        //                     {resume.candidate.nationalNumber}
        //                 </a>
        //             </Card.Content>

        //             <Header as='h3' block color="purple">
        //                 Candidate Education Details
        //             </Header>
        //             {resume.education.map((edu) => (
        //             <Card.Content>
        //                 <Card.Header>
        //                     <Icon name="university" color="olive" />
        //                     {edu.schoolName} / {edu.schoolDepartment}
        //                 </Card.Header>
        //                 <Card.Meta>
        //                     <Icon name="calendar alternate outline" color="teal" />
        //                     <span className="date">{edu.startingDate} - {edu.endDate}</span>
        //                 </Card.Meta>
        //                 <Card.Description>
        //                     <Icon name="certificate" color="yellow" />
        //                     {edu.graduateType.description}
        //                 </Card.Description>

        //             </Card.Content>
        //             ))}                    
                   


        //             <Header as='h3' block color="purple">
        //                 Candidate Language Details
        //             </Header>

        //             {resume.languages.map((language) => (
        //                 <Card.Content>                            
        //                     <Card.Header>
        //                         <Icon name="language" color="olive" size="large"/>
        //                         {language.languageName}
        //                     </Card.Header>
        //                     <Card.Meta>
        //                         <Icon name="level up" color="teal" size="large" />
        //                         <span className="date">{language.languageLevel}</span>
        //                     </Card.Meta>
        //                 </Card.Content>
        //             ))}


        //             <Header as='h3' block color="purple">
        //                 Candidate Technologies Details
        //             </Header>
        //             {resume.technologies.map((technology) => (
        //                 <Card.Content>
        //                     <Card.Header>
        //                         <Icon name="star" color="red" />
        //                         {technology.description}
        //                     </Card.Header>
        //                 </Card.Content>
        //             ))}


        //             <Header as='h3' block color="purple">
        //                 Candidate Job Experiences Details
        //             </Header>
        //             {resume.jobExperiences.map((jobExperience) => (
        //                 <Card.Content>
        //                     <Card.Header>
        //                         <Icon name="hospital outline" color="teal" />
        //                         {jobExperience.companyName}
        //                     </Card.Header>
        //                     <Card.Description>
        //                         <Icon name="calendar" color="orange" />
        //                         {jobExperience.startingDate} - {jobExperience.endDate}
        //                     </Card.Description>
        //                     <Card.Description>
        //                         <Icon name="skyatlas" color="olive" />
        //                         {jobExperience.jobPosition.position}
        //                     </Card.Description>
        //                 </Card.Content>
        //             ))}


        //         </Card>
        //     ))}
        // </div>
        <div>
            Bir kullanıcıya ait tüm cv ler listelenecektir.
        </div>
    );
}
