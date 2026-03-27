import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const SingleTeacherAsyncThunk = createAsyncThunk('teacherSlice/singleTeacher', async (id: string, {rejectWithValue}) => {
  try {
    const response = await api.get(`/api/v1/teachers/${id}`, {withCredentials: true})
    return response.data;
  } 
  catch (error: unknown) {
    if(axios.isAxiosError(error)){
      return rejectWithValue(error.response?.data?.message || error.message)
    }
    return rejectWithValue('Error during Get Single Teacher')
  }
})