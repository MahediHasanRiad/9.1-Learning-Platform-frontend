import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createTeacherAsyncThunk = createAsyncThunk('teacherSlice/create', async (data, {rejectWithValue}) => {
  try {
    const response = await api.post('/api/v1/teacher', data, {withCredentials: true})
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})