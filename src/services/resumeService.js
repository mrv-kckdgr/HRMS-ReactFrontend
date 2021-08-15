import axios from "axios";
import {proxy} from "../../package.json"

export default class ResumeService {

    // Tüm iş ilanları listesi
    getAllResumes() {
        let newUrl = proxy + "resumes/getall";
        return axios.get(newUrl);
    }
}