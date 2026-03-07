import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logoutAsyncThunk = createAsyncThunk("authSlice/logout", async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get('/api/v1/logout', {withCredentials: true})
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})