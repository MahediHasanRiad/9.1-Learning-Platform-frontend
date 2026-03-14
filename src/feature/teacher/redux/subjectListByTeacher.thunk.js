import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const subjectListByTeacherAsyncThunk = createAsyncThunk('teacherSlice/subjectList', async (id, {rejectWithValue}) => {
  try {
    const response = await api.get(`/api/v1/subjects/${id}`, {withCredentials: true})
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})