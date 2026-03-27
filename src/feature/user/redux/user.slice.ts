import { createSlice } from "@reduxjs/toolkit";
import type { UserType } from "../user-type";
// import { updateProfileAsyncThunk } from "./updateProfile.thunk";
// import { resetPasswordAsyncThunk } from "./resetPassword.thunk";
import { findUserByIdAsyncThunk } from "./find-by-id.thunk";


export interface UserInitialStateType {
  user: UserType | null;
  loading: boolean;
  error: null | undefined | string | unknown
}

const initialState: UserInitialStateType = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // update profile
    // builder
      // .addCase(updateProfileAsyncThunk.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(updateProfileAsyncThunk.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.error = null;
      //   state.user = action.payload.data;
      // })
      // .addCase(updateProfileAsyncThunk.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      // });

    // reset password
    // builder
      // .addCase(resetPasswordAsyncThunk.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(resetPasswordAsyncThunk.fulfilled, (state, action) => {
      //   state.error = null;
      //   state.loading = true;
      //   state.user = action.payload.data;
      // })
      // .addCase(resetPasswordAsyncThunk.rejected, (state, action) => {
      //   state.error = action.payload;
      //   state.loading = false;
      // });

    // find user by id
    builder
      .addCase(findUserByIdAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findUserByIdAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.data;
      })
      .addCase(findUserByIdAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
