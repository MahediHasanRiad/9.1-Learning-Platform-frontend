import { createSlice } from "@reduxjs/toolkit";
import { createCoachingAsyncThunk } from "./createCoaching.thunk";
import type { ShowBatchType, StaffType } from "../coaching-type";
import { AllBatchByCoachingThunk } from "./allbatch.thunk";
import { updateCoachingProfileAsynkThunk } from "./updateCoachingProfile.thunk";

export interface initialStateType {
  coaching: any | null;
  batch: ShowBatchType[] | null;
  staff: StaffType | null;
  loading: boolean;
  error: string | null | undefined | unknown;
}

const initialState: initialStateType = {
  coaching: null,
  batch: null,
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
        state.batch = action.payload.data;
      })
      .addCase(AllBatchByCoachingThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = coachingSlice.actions;
export default coachingSlice.reducer;
