import axios from "axios";
import {proxy} from "../../package.json"

export default class FavoriteJobPostingService{
    //http://localhost:8083/api/favoritejobpostings/getall
    getFavoriteJobPostings(){
        let newUrl = proxy + "favoritejobpostings/getall";
        return axios.get(newUrl);
    }

    add(favoriteJobPostings){
        let newUrl = proxy + "favoritejobpostings/add";
        return axios.post(newUrl, favoriteJobPostings);
    }

    addFavoriteJobPostingDto(candidateId, jobPostingId){
        //http://localhost:8083/api/favoritejobpostings/addFavoriteJobPostingDto?candidateId=4&jobPostingId=2
        let newUrl = proxy + "favoritejobpostings/addFavoriteJobPostingDto?candidateId=" + candidateId + "&jobPostingId=" + jobPostingId;
        return axios.post(newUrl);
    }

}