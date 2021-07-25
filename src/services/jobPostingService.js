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
        //http://localhost:8083/api/jobpostings/addJobPostingDto
        console.log("job posting")
        console.log(jobPosting)
        let newUrl = proxy + "jobpostings/addJobPostingDto";
        console.log(newUrl)        
        return axios.post(newUrl, jobPosting);
    }

    //Aktif iş ilanları listesi (Employer tarafından durumu true olan iş ilanları)
    getByStatus(){
        //http://localhost:8083/api/jobpostings/getByStatus?status=true
        let newUrl = proxy + "jobpostings/getByStatus?status=true";
        return axios.get(newUrl);
    }


    // İş ilanını aktif hale getirme
    activeJobPosting(id){
        //http://localhost:8083/api/jobpostings/activeJobPosting?id=3
        console.log(id);
        let newUrl = proxy + "jobpostings/activejobposting?id=" + id;
        console.log(newUrl)
        return axios.post(newUrl)
    }

    // İş ilanını pasif hale getirme
    closeJobPosting(id){
        //http://localhost:8083/api/jobpostings/closeJobPosting?id=3
        let newUrl = proxy + "jobpostings/closejobposting?id=";
        return axios.post(newUrl + id)
    }
    
}