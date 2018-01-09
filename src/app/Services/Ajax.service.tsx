import axios from 'axios';

export default class AjaxService{
    getUsersData(query){
        console.log("In getUsersdata")
        return axios.get('https://api.github.com/search/users?q='+query)
    }
}