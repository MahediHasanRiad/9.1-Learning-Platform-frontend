import { createSlice } from "@reduxjs/toolkit";
import { registrationAsyncThunk } from "./register.thunk";
import { loginAsyncThunk } from "./login.thunk";

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
  reducers: {
    logout: () => {},
    setUser: (state, action) => {
      state.user = action.payload;
      state.user = action.payload.role;
    },
  },
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

        state.user = action.payload.data;
        state.role = state.user.getUser.role;
      })
      .addCase(registrationAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // login
    builder
      .addCase(loginAsyncThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.data.user;
        state.role = action.payload.data.user.role;
        state.token = action.payload.data.token;
      })
      .addCase(loginAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
