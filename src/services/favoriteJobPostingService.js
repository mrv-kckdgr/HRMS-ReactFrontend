import axios from "axios";
import {proxy} from "../../package.json"

export default class FavoriteJobPostingService{
    
    getFavoriteJobPostings(){
        let newUrl = proxy + "favoritejobpostings/getall";
        return axios.get(newUrl);
    }

    add(favoriteJobPostings){
        let newUrl = proxy + "favoritejobpostings/add";
        return axios.post(newUrl, favoriteJobPostings);
    }

    addFavoriteJobPostingDto(candidateId, jobPostingId){
        let newUrl = proxy + "favoritejobpostings/addFavoriteJobPostingDto?candidateId=" + candidateId + "&jobPostingId=" + jobPostingId;
        return axios.post(newUrl);
    }

}