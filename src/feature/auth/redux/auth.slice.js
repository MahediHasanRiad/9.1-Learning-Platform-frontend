import { createSlice } from "@reduxjs/toolkit";
import { registrationAsyncThunk } from "./register.thunk";

const initialState = {
  user: null,
  role: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // registration 
    builder
      .addCase(registrationAsyncThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registrationAsyncThunk.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        
        console.log('p', action.payload)
      })
      .addCase(registrationAsyncThunk.rejected, (state, action) => {
        console.log('err', action.payload)
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
