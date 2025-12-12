import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchQuery: "",
    isLoading: false,
    isError: false,
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setSearchQuery: (state, { payload }) => {
            state.searchQuery = payload;
            state.isLoading = true;
        },
        setLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setError: (state, { payload }) => {
            state.isError = payload;
        }
    },
});

export const { setSearchQuery, setLoading, setError } = globalSlice.actions;
export default globalSlice.reducer;