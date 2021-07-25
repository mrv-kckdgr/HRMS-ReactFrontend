import axios from "axios";
import {proxy} from "../../package.json"

export default class CityService {
    getCities() {
        let newUrl = proxy + "cities/getall"
        return axios.get(newUrl);
    }
}