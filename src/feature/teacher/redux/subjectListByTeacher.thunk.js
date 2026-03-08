import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const subjectListByTeacherAsyncThunk = createAsyncThunk('teacherSlice/subjectList', async (id, {rejectWithValue}) => {
  try {
    const response = await axios.get(`/api/v1/subjects/${id}`, {withCredentials: true})
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})