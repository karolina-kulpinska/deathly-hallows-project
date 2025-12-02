import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        loading: "idle",
    },
    reducers: {
        //Tu będzie logika naszego projektu 
    },
});

export default tasksSlice.reducer;