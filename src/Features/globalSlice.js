import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchQuery: "",
    moviesData: [],
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
        },

        setMoviesData: (state, { payload }) => {
            state.moviesData = payload;
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
    selectIsLoading: state => state.global.isLoading,
    selectIsError: state => state.global.isError,
    selectSearchQuery: state => state.global.searchQuery,
};
export const {
    setSearchQuery,
    setMoviesData,
    setLoading,
    setError,
    fetchPopularMovies
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;