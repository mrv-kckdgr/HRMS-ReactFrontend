import axios from "axios";
import {proxy} from "../../package.json"

export default class LanguageService{
    
    addLanguage(language){
        let newUrl = proxy + "languages/add";
        return axios.post(newUrl, language);
    }

    addLanguageDto(language){
        let newUrl = proxy + "languages/addLanguageDto";
        return axios.post(newUrl, language);
    }

    getByResumeId(resumeId){
        let newUrl = proxy + "languages/getByResumeId?resumeId=" + resumeId;
        return axios.get(newUrl);
    }

    updateLanguageDto(language){
        let newUrl = proxy + "languages/updateLanguageDto";
        return axios.post(newUrl, language);
    }

    getById(id){
        let newUrl = proxy + "languages/getbyid?id=" + id;
        return axios.get(newUrl);
    }
}