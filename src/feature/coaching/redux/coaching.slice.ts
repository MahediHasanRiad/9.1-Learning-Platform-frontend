import { createSlice } from "@reduxjs/toolkit";
import { createCoachingAsyncThunk } from "./createCoaching.thunk";
import type { initialStateType } from "../coaching-type";
import { updateCoachingProfileAsynkThunk } from "./updateCoachingProfile.thunk";
import { createBatchAsyncThunk } from "./create-batch.thunk";
import { fetchAllBatchesThunk } from "./fetch-all-batches.thunk";
import { AllBatchByCoachingThunk } from "./allbatch.thunk";
import { fetchStaffThunk } from "./fetch-staff.thunk";

const initialState: initialStateType = {
  coaching: null,
  batch: null,
  batches: null,
  staff: null,
  loading: false,
  error: null,
};

const coachingSlice = createSlice({
  name: "coachingSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // create
    builder
      .addCase(createCoachingAsyncThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCoachingAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.coaching = action.payload.data;
        console.log(action.payload.data);
      })
      .addCase(createCoachingAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // update
    builder
      .addCase(updateCoachingProfileAsynkThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCoachingProfileAsynkThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        console.log("update", action.payload.data);
        state.coaching = action.payload.data;
      })
      .addCase(updateCoachingProfileAsynkThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // all batches by coaching
    builder
      .addCase(AllBatchByCoachingThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AllBatchByCoachingThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        console.log('return batch', action.payload)
        state.batches = action.payload;
      })
      .addCase(AllBatchByCoachingThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // create
    builder
      .addCase(createBatchAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBatchAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.batch = action.payload;
      })
      .addCase(createBatchAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // fetch all batch for batches page
    builder
      .addCase(fetchAllBatchesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllBatchesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.batches = action.payload;
      })
      .addCase(fetchAllBatchesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // fetch all staff
    builder
      .addCase(fetchStaffThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStaffThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.staff = action.payload;
      })
      .addCase(fetchStaffThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = coachingSlice.actions;
export default coachingSlice.reducer;
