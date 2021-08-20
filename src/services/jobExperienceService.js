import axios from "axios"
import {proxy} from "../../package.json"

export default class JobExperienceService{
    
    getJobExperiences(){
        let newUrl = proxy + "jobexperiences/getall";
        return axios.get(newUrl);
    }

    addJobExperienceDto(jobExperience){
        let newUrl = proxy + "jobexperiences/addJobExperienceDto";
        return axios.post(newUrl, jobExperience);
    }

    getByResumeId(id){
        let newUrl = proxy + "jobexperiences/getbyresumeid?resumeId=" + id;
        return axios.get(newUrl)
    }

    getById(id){
        let newUrl = proxy + "jobexperiences/getbyid?id=" + id;
        return axios.get(newUrl);
    }
}