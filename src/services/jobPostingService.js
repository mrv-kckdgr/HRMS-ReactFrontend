import axios from "axios";
import {proxy} from "../../package.json"

export default class JobPostingService {

    // Tüm iş ilanları listesi
    getJobPostings() {
        let newUrl = proxy + "jobpostings/getjobpostingwithdetails";
        return axios.get(newUrl);
    }

    getById(id){
        let newUrl = proxy + "jobpostings/getbyid?id="
        return axios.get(newUrl + id)
    }

    addJobPostingDto(jobPosting){
        let newUrl = proxy + "jobpostings/addJobPostingDto";       
        return axios.post(newUrl, jobPosting);
    }

    updateJobPostingDto(jobPosting){
        let newUrl = proxy + "jobpostings/updateJobPostingDto";   
        return axios.post(newUrl, jobPosting);
    }

    //Aktif iş ilanları listesi (Employer tarafından durumu true olan iş ilanları)
    getByStatus(){
        let newUrl = proxy + "jobpostings/getByStatus?status=true";
        return axios.get(newUrl);
    }


    // İş ilanını aktif hale getirme
    activeJobPosting(id){
        console.log(id);
        let newUrl = proxy + "jobpostings/activejobposting?id=" + id;
        console.log(newUrl)
        return axios.post(newUrl)
    }

    // İş ilanını pasif hale getirme
    closeJobPosting(id){
        let newUrl = proxy + "jobpostings/closejobposting?id=";
        return axios.post(newUrl + id)
    }

    getByCityAndJobPosition(cityId, jobPositionId){
        let newUrl = proxy + "jobpostings/getByCityAndJobPosition?cityId="+ cityId + "&jobPositionId=" + jobPositionId;
        return axios.get(newUrl);
    }

    getByCityAndJobPositionAndWorkingTimeAndWorkingType(cityId, jobPositionId, workingTimeId, workingTypeId){
        let newUrl = proxy + "jobpostings/getByCityAndJobPositionAndWorkingTimeAndWorkingType?cityId=" + cityId + "&jobPositionId=" + jobPositionId + "&workingTimeId=" + workingTimeId + "&workingTypeId=" + workingTypeId;
        return axios.get(newUrl);
    }
}