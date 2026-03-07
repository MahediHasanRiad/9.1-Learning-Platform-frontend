import { createSlice } from "@reduxjs/toolkit";
import { updateProfileAsyncThunk } from "./updateProfile.thunk";
import { resetPasswordAsyncThunk } from "./resetPassword.thunk";

const initialState = {
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
    builder
      .addCase(updateProfileAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfileAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        console.log("updated", action.payload);
        state.user = action.payload;
      })
      .addCase(updateProfileAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // reset password
    builder
      .addCase(resetPasswordAsyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPasswordAsyncThunk.fulfilled, (state, action) => {
        state.error = null;
        state.loading = true;
        state.user = action.payload.data;
      })
      .addCase(resetPasswordAsyncThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
