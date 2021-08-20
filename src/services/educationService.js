import axios from "axios";
import {proxy} from "../../package.json"

export default class EducationService{
    
    getEducations(){
        let newUrl = proxy + "education/getall";
        return axios.get(newUrl);
    }

    addEducationDto(education){
        let newUrl = proxy + "education/addEducationDto";
        console.log(newUrl)
        return axios.post(newUrl, education);
    }

    getByResumeId(id){
        let newUrl = proxy + "education/getByResumeId?resumeId=" + id;
        return axios.get(newUrl);
    }

    getById(id){
        let newUrl = proxy + "education/getbyid?id=" + id;
        return axios.get(newUrl);
    }
}