import axios from 'axios'; 

export default axios.create({
    baseURL: 'http://tmdb.leonardomeza.com/api/v1/',
    responseType: 'json'
});