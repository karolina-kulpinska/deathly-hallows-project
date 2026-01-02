import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        searchQuery: "",
        moviesData: [],
        peopleData: [],
        genres: [],
        isLoading: false,
        isError: false,
        page: 1,
        totalPages: 500,
    },
    reducers: {
        setSearchQuery: (state, { payload }) => {
            state.searchQuery = payload;
            state.page = 1;
        },

        fetchPopularMovies: (state) => {
            state.isLoading = true;
        },

        setMoviesData: (state, { payload }) => {
            state.moviesData = payload;
            state.isLoading = false;
        },

        fetchPopularPeople: (state) => {
            state.isLoading = true;
        },

        setPeopleData: (state, { payload }) => {
            state.peopleData = payload;
            state.isLoading = false;
        },

        setLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setError: (state, { payload }) => {
            state.isError = payload;
            state.isLoading = false;
        },
        setPage: (state, { payload }) => {
            state.page = payload;
        },
        setTotalPages: (state, { payload }) => {
            state.totalPages = payload;
        },
        fetchGenres: () => { },
        setGenres: (state, { payload }) => {
            state.genres = payload;
        },
    },
});

export const globalSelectors = {
    selectMoviesData: state => state.global.moviesData,
    selectPeopleData: state => state.global.peopleData,
    selectIsLoading: state => state.global.isLoading,
    selectIsError: state => state.global.isError,
    selectSearchQuery: state => state.global.searchQuery,
    selectPage: state => state.global.page,
    selectTotalPages: state => state.global.totalPages,
    selectGenres: state => state.global.genres,
};
export const {
    setSearchQuery,
    setMoviesData,
    setPeopleData,
    setLoading,
    setError,
    fetchPopularMovies,
    fetchPopularPeople,
    setPage,
    setTotalPages,
    fetchGenres,
    setGenres
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;