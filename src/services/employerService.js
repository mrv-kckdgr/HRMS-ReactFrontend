import axios from "axios";
import {proxy} from "../../package.json"


export default class EmployerService{
    getEmployers(){
        let newUrl = proxy + "employers/getall";
        return axios.get(newUrl);
    }

    loginEmployer(email, password){
        let newUrl = proxy + "employers/loginEmployer?email=";
        return axios.post(newUrl,  {email}, "&password=", {password});
    }

    addEmployer(employer){
        let newUrl = proxy + "employers/add";
        return axios.post(newUrl, employer);
    }
}