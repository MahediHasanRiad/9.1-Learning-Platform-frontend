import { createSlice } from "@reduxjs/toolkit";
import { registrationAsyncThunk } from "./register.thunk";
import { loginAsyncThunk } from "./login.thunk";
import { logoutAsyncThunk } from "./logout.thunk";

const initialState = {
  user: null,
  teacher: null,
  coaching: null,
  role: 'User',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    logout: () => {},
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.teacher = action.payload.teacher;
    },
    setCoaching: (state, action) => {
      console.log('dd', action.payload.data)
      state.coaching = action.payload.data;
    },
    updateRole: (state, action) => {
      console.log('role', action.payload)
      state.role = action.payload;
    }
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
      })
      .addCase(loginAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // logout
    builder
      .addCase(logoutAsyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = null;
      })
      .addCase(logoutAsyncThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { logout, setUser, setCoaching, updateRole } = authSlice.actions;
export default authSlice.reducer;
