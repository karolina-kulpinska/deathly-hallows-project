import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchQuery: "",
    moviesData: [],
    peopleData: [],
    isLoading: false,
    isError: false,
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setSearchQuery: (state, { payload }) => {
            state.searchQuery = payload;
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
        }
    },
});

export const globalSelectors = {
    selectMoviesData: state => state.global.moviesData,
    selectPeopleData: state => state.global.peopleData,
    selectIsLoading: state => state.global.isLoading,
    selectIsError: state => state.global.isError,
    selectSearchQuery: state => state.global.searchQuery,
};
export const {
    setSearchQuery,
    setMoviesData,
    setPeopleData,
    setLoading,
    setError,
    fetchPopularMovies,
    fetchPopularPeople
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;