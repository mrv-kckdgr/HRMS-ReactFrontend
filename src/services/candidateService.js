import axios from "axios";
import {proxy} from "../../package.json"

export default class CandidateService{

    getCandidates(){
        let newUrl = proxy + "candidates/getall"
        return axios.get(newUrl);
    }

    add(candidate){
        let newUrl = proxy + "candidates/add"
        console.log(candidate)
        return axios.post(newUrl, candidate);
    }

    logiCandidate(email, password){
        let newUrl = proxy + "candidates/loginCandidate?email=";
        return axios.post(newUrl,  {email}, "&password=", {password});
    }

    getById(id){
        let newUrl = proxy + "candidates/getbyid?id=" + id;
        return axios.get(newUrl);
    }

    // update(candidate){
    //     let 
    // }
}