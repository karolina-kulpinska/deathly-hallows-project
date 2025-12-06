import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;

const tmdbApi = axios.create({
    baseURL: API_URL,
    // Kluczowy element: dodaje api_key do każdego zapytania! Pamiętajcie o tym!
    params: {
        api_key: API_KEY,
    },
});

export default tmdbApi;