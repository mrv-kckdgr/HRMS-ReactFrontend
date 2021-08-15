import axios from "axios"
import {proxy} from "../../package.json"

export default class TechnologyService{

    getTechnologies(){
        let newUrl = proxy + "technologies/getall";
        return axios.get(newUrl);
    }

    addTechnologyDto(technology){
        let newUrl = proxy + "technologies/addTechnologyDto";
        return axios.post(newUrl, technology);
    }

    getByResumeId(id){
        //http://localhost:8083/api/technologies/getbyresumeid?resumeId=1
        let newUrl = proxy + "technologies/getbyresumeid?resumeId=" + id;
        return axios.get(newUrl)
    }

    getById(id){
        // http://localhost:8083/api/technologies/getbyid?id=1
        let newUrl = proxy + "technologies/getbyid?id=" + id;
        return axios.get(newUrl);
    }

    updateTechnologyDto(technology){
        //http://localhost:8083/api/technologies/update
        let newUrl = proxy + "technologies/updateTechnologyDto";
        return axios.post(newUrl, technology);
    }
}