import axios from 'axios';

export default axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/550?api_key=21022ee1bf657e32c52ec10f528cfaab",
});