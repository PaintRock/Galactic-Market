// api/axiosConfig.js
import axios from 'axios';

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "21022ee1bf657e32c52ec10f528cfaab"
    }
});
