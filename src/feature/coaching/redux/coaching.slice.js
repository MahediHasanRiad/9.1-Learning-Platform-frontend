import { createSlice } from "@reduxjs/toolkit";
import { createCoachingAsyncThunk } from "./createCoaching.thunk";

const initialState = {
  coaching: null,
  loading: false,
  error: null,
};

const coachingSlice = createSlice({
  name: "coachingSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCoachingAsyncThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCoachingAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.coaching = action.payload.data;
        console.log(action.payload.data)
      })
      .addCase(createCoachingAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export const {} = coachingSlice.actions;
export default coachingSlice.reducer;