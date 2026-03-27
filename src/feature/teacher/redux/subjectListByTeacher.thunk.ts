import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const subjectListByTeacherAsyncThunk = createAsyncThunk('teacherSlice/subjectList', async (id: string, {rejectWithValue}) => {
  try {
    const response = await api.get(`/api/v1/subjects/${id}`, {withCredentials: true})
    return response.data
  } catch (error: unknown) {
    if(axios.isAxiosError(error)){
      return rejectWithValue(error.response?.data?.message || error.message)
    }
    return rejectWithValue('error during get subject list by teacher')
  }
})