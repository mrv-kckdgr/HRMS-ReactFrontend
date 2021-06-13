import axios from "axios";

export default class EducationService{
    getEducations(){
        return axios.get("http://localhost:8083/api/education/getall")
    }
}