import axios from "axios";
import {proxy} from "../../package.json"

export default class EducationService{
    getEducations(){
        let newUrl = proxy + "education/getall";
        return axios.get(newUrl);
    }

    addEducationDto(education){
        console.log(education)
        //http://localhost:8083/api/education/addEducationDto
        let newUrl = proxy + "education/addEducationDto";
        console.log(newUrl)
        return axios.post(newUrl, education);
    }

    getByResumeId(id){
        //http://localhost:8083/api/education/getByResumeId?resumeId=1
        let newUrl = proxy + "education/getByResumeId?resumeId=" + id;
        return axios.get(newUrl);
    }

    getById(id){
        //http://localhost:8083/api/education/getbyid?id=2
        let newUrl = proxy + "education/getbyid?id=" + id;
        return axios.get(newUrl);
    }
}