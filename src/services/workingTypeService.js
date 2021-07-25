import axios from "axios"
import {proxy} from "../../package.json"

export default class WorkingTypeService{

    getWorkingTypes(){
        let newUrl = proxy + "workingtypes/getall"
        return axios.get(newUrl);
    }
}