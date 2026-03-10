import { createSlice } from "@reduxjs/toolkit";
import { createCoachingStaffAsyncThunk } from "./create-staff.thunk";

const initialState = {
  staff: null,
  loading: false,
  error: null,
};

const coachingStaffSlice = createSlice({
  name: "coachingStaff",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // create 
    builder
      .addCase(createCoachingStaffAsyncThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCoachingStaffAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.staff = action.payload.data;
      })
      .addCase(createCoachingStaffAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export const {} = coachingStaffSlice.actions;
export default coachingStaffSlice.reducer;