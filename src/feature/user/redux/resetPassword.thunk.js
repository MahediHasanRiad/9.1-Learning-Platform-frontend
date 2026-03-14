import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const resetPasswordAsyncThunk = createAsyncThunk('userSlice/resetPassword', async (data, {rejectWithValue}) => {
  try {
    const response = await api.post('/api/v1/changePassword', data, {withCredentials: true})
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})