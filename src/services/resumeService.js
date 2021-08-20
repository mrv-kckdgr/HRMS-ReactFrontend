import axios from "axios";
import {proxy} from "../../package.json"

export default class ResumeService {

    getAllResumes() {
        let newUrl = proxy + "resumes/getall";
        return axios.get(newUrl);
    }
}