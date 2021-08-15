import React from 'react';
import EducationAdd from '../Education/EducationAdd';
import TechnologyAdd from '../Technology/TechnologyAdd';
import JobExperienceAdd from '../JobExperience/JobExperienceAdd';
import LanguageAdd from '../Language/LanguageAdd';


export default function ResumeAdd() {

    return (
        <div>
            <EducationAdd /><br />
            <LanguageAdd /><br />
            <TechnologyAdd /><br />
            <JobExperienceAdd /><br />
        </div>
    )
}