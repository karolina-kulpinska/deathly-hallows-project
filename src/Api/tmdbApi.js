import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN_V4;

const tmdbApi = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    },
});

export const getSearchMovies = async (query, page) => {

    const response = await tmdbApi.get(`/search/movie?query=${query}&page=${page}`);
    return response.data;
};

export const getPopularMovies = async (page) => {

    const response = await tmdbApi.get(`/movie/popular?page=${page}`);
    return response.data;
};

export const getPopularPeople = async (page) => {
    const response = await tmdbApi.get(`/person/popular?page=${page}`);
    return response.data;
};

export const getSearchPeople = async (query, page) => {
    const response = await tmdbApi.get(`/search/person?query=${query}&page=${page}`);
    return response.data;
};

export const getGenres = async () => {
    const response = await tmdbApi.get("/genre/movie/list?language=en");
    return response.data;
};

export const getPersonDetails = async (id) => {
    const response = await tmdbApi.get(`/person/${id}?language=en-US`);
    return response.data;
};

export const getPersonCredits = async (id) => {
    const response = await tmdbApi.get(`/person/${id}/movie_credits?language=en-US`);
    return response.data;
};
export default tmdbApi;