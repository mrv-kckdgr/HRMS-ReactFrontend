import axios from "axios"
import {proxy} from "../../package.json"


export default class EmployeeService{
    getEmployees(){
        let newUrl = proxy + "employees/getall";
        return axios.get(newUrl);
    }

    getByEmployeeId(id){
        //http://localhost:8083/api/employees/getbyid?id=43
        let newUrl = proxy + "employees/getbyid?id=" + id;
        return axios.get(newUrl);
    }

    loginEmployee(email, password){
        let newUrl = proxy + "employees/loginEmployee?email=" + email + "&password=" + password;
        console.log(newUrl)
        //return axios.post(newUrl,  {email}, "&password=", {password});
        return axios.post(newUrl);
    }

    add(employee){
        let newUrl = proxy + "employees/add";
        return axios.post(newUrl, employee);
    }

    update(employee){
        let newUrl = proxy + "employees/update";
        return axios.post(newUrl, employee);
    }
}