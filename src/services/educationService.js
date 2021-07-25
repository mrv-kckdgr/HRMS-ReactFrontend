import axios from "axios";
import {proxy} from "../../package.json"

export default class EducationService{
    getEducations(){
        let newUrl = proxy + "education/getall";
        return axios.get(newUrl);
    }

    addEducationDto(education){
        //http://localhost:8083/api/education/addEducationDto
        let newUrl = proxy + "education/addEducationDto";
        return axios.post(newUrl, education);
    }
}