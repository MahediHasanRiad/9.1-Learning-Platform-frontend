import { createSlice } from "@reduxjs/toolkit";
import { updateProfileAsyncThunk } from "./updateProfile.thunk";

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
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
