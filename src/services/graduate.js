import axios from "axios";

export default class GraduateService{
    getGraduates(){
        return axios.get("http://localhost:8083/api/graduatetypes/getall");
    }
}