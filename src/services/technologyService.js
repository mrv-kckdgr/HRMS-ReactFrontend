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
        let newUrl = proxy + "technologies/getbyresumeid?resumeId=" + id;
        return axios.get(newUrl)
    }

    getById(id){        
        let newUrl = proxy + "technologies/getbyid?id=" + id;
        return axios.get(newUrl);
    }

    updateTechnologyDto(technology){        
        let newUrl = proxy + "technologies/updateTechnologyDto";
        return axios.post(newUrl, technology);
    }
}