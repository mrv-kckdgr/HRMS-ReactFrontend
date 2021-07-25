import axios from "axios";
import {proxy} from "../../package.json"

export default class JobPositionService{
    getJobPositions(){
        let newUrl = proxy + "jobpositions/getall"
        return axios.get(newUrl);
    }

    addJobPosition(jobPosition){
        let newUrl = proxy + "jobpositions/add"
        return axios.post(newUrl, jobPosition);
    }
}