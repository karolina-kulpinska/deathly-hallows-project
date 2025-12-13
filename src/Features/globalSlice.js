import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchQuery: "",
    moviesData: null,
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

export const { setSearchQuery, setMoviesData, setLoading, setError } = globalSlice.actions;
export default globalSlice.reducer;