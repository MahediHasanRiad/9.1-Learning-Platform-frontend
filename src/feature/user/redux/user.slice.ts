import { createSlice } from "@reduxjs/toolkit";
import type { UserInitialStateType } from "../user-type";
import { updateProfileAsyncThunk } from "./updateProfile.thunk";
import { resetPasswordAsyncThunk } from "./resetPassword.thunk";
import { findUserByIdAsyncThunk } from "./find-by-id.thunk";
import { fetchEnrolledBatchThunk } from "./enrolled.thunk";


const initialState: UserInitialStateType = {
  user: null,
  enrolled: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // update profile
    builder
      .addCase(updateProfileAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfileAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(updateProfileAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // reset password
    // builder
    //   .addCase(resetPasswordAsyncThunk.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(resetPasswordAsyncThunk.fulfilled, (state, action) => {
    //     state.error = null;
    //     state.loading = true;
    //     state.user = action.payload;
    //   })
    //   .addCase(resetPasswordAsyncThunk.rejected, (state, action) => {
    //     state.error = action.payload;
    //     state.loading = false;
    //   });

    // find user by id
    builder
      .addCase(findUserByIdAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findUserByIdAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(findUserByIdAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // enrolled
    builder
      .addCase(fetchEnrolledBatchThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEnrolledBatchThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.enrolled = action.payload;
      })
      .addCase(fetchEnrolledBatchThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
