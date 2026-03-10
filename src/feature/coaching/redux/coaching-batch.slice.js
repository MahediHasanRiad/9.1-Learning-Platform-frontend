import { createSlice } from "@reduxjs/toolkit";
import { createBatchAsyncThunk } from "./create-batch.thunk";

const initialState = {
  batch: null,
  loading: false,
  error: null,
};

const batchSlice = createSlice({
  name: "batchSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBatchAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBatchAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.batch = action.payload.data;
      })
      .addCase(createBatchAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = batchSlice.actions;
export default batchSlice.reducer;
