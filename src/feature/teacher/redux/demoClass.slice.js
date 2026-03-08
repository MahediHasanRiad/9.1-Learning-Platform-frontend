import { createSlice } from "@reduxjs/toolkit";
import { createDemoClassAsyncThunk } from "./createDemoClass.thunk";

const initialState = {
  demoClass: null,
  loading: false,
  error: null,
};

const demoClassSlice = createSlice({
  name: "demoClassSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // create
    builder
      .addCase(createDemoClassAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDemoClassAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.demoClass = action.payload.data;
        console.log("asy", action.payload.data);
      })
      .addCase(createDemoClassAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = demoClassSlice.actions;
export default demoClassSlice.reducer;
