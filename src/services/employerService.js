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

    getByUnapprovedEmployer(){
        let newUrl = proxy + "employers/getByUnapprovedEmployer";
        return axios.get(newUrl);
    }

    approveEmployer(id){
        let newUrl = proxy + "employers/approveEmployer?id=" + id;
        return axios.post(newUrl);
    }

    getById(id){
        let newUrl = proxy + "employers/getbyid?id=" + id;
        return axios.get(newUrl);
    }

    updateEmployer(employer){
        let newUrl = proxy + "employers/update";
        return axios.post(newUrl, employer);
    }

}