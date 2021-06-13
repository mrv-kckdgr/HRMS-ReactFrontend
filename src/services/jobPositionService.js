import axios from "axios";

export default class JobPositionService{
    getJobPositions(){
        return axios.get("http://localhost:8083/api/jobpositions/getall")
    }
}