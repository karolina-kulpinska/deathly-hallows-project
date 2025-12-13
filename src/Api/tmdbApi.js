import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN_V4;

const tmdbApi = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },

});

export default tmdbApi;