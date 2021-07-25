import axios from "axios";
import {proxy} from "../../package.json"

export default class WorkingTimeService{
    getWorkingTimes(){
        let newUrl = proxy + "workingtimes/getall";
        return axios.get(newUrl);
    }
}