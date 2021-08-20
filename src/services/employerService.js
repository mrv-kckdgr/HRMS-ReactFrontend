import axios from "axios";
import {proxy} from "../../package.json"


export default class EmployerService{
    
    getEmployers(){
        let newUrl = proxy + "employers/getall";
        return axios.get(newUrl);
    }

    loginEmployer(email, password){
        let newUrl = proxy + "employers/loginEmployer?email=" + email + "&password=" + password;
        return axios.post(newUrl);
    }

    addEmployer(employer){
        let newUrl = proxy + "employers/add";
        return axios.post(newUrl, employer);
    }
}