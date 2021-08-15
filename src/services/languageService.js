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
        //http://localhost:8083/api/languages/getByResumeId?resumeId=1
        let newUrl = proxy + "languages/getByResumeId?resumeId=" + resumeId;
        return axios.get(newUrl);
    }

    updateLanguageDto(language){
        //http://localhost:8083/api/languages/updateLanguageDto
        //http://localhost:8083/api/languages/updateLanguageDto?id=6&languageLevel=2&languageName=Almanca21&resumeId=1
        let newUrl = proxy + "languages/updateLanguageDto";
        return axios.post(newUrl, language);
    }

    getById(id){
        // http://localhost:8083/api/languages/getbyid?id=7
        let newUrl = proxy + "languages/getbyid?id=" + id;
        return axios.get(newUrl);
    }
}