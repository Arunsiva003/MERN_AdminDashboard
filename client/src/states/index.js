import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    userId: "63701cc1f03239b7f700000e", // this is the id of the user that is logged in
  };

export const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setMode: (state) => {
        state.mode = state.mode === "light" ? "dark" : "light"; // this needed 3 === signs
    },
},
});

export const {setMode} = globalSlice.actions;

export default globalSlice.reducer;
