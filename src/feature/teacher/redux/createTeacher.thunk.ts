import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TeacherSliceType, TeacherType } from "../teacher-type";
import axios from "axios";

interface ReturnTeacherType {
  success: boolean;
  message: string;
  data: TeacherSliceType;
}

export const createTeacherAsyncThunk = createAsyncThunk<ReturnTeacherType, FormData, {rejectValue: string}>('teacherSlice/create', async (formData, {rejectWithValue}) => {
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