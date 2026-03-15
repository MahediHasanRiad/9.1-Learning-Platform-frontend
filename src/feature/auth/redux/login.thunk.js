import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginAsyncThunk = createAsyncThunk('authSlice/login', async (data, {rejectWithValue}) => {
  try {
    console.log(data)
    const response = await api.post('/api/v1/login', data, {withCredentials: true})
    return response.data
  } catch (e) {
    return rejectWithValue(e.response?.data?.message || e.message)
  }
})