import axios from "axios";
import {proxy} from "../../package.json"

export default class GraduateService{
    getGraduates(){
        let newUrl = proxy + "graduatetypes/getall";
        return axios.get(newUrl);
    }
}