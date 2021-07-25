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
}