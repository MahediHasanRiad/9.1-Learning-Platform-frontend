import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAsyncThunk = createAsyncThunk('authSlice/login', async (data, {rejectWithValue}) => {
  try {
    console.log(data)
    const response = await axios.post('/api/v1/login', data)
    return response.data
  } catch (e) {
    return rejectWithValue(e.response?.data?.message || e.message)
  }
})