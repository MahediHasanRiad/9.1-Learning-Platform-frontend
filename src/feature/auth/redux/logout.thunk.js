import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logoutAsyncThunk = createAsyncThunk("authSlice/logout", async (_, {rejectWithValue}) => {
  try {
    const response = await api.get('/api/v1/logout', {withCredentials: true})
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})