import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TeacherType } from "../teacher-type";
import axios from "axios";


export const createTeacherAsyncThunk = createAsyncThunk<TeacherType, FormData, {rejectValue: string}>('teacherSlice/create', async (formData, {rejectWithValue}) => {
  try {
    const response = await api.post('/api/v1/teacher', formData, {withCredentials: true})
    return response.data
  } catch (error: unknown) {
    if(axios.isAxiosError(error)){
      return rejectWithValue(error.response?.data?.message || error.message)
    }
    return rejectWithValue('Error during Create Teacher !!!')
  }
})