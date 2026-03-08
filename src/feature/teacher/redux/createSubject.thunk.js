import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createSubjectAsyncThunk = createAsyncThunk('teacherSlice/createSubject', async (data, {rejectWithValue}) => {
  try {
    const response = await axios.post('/api/v1/subject', data, {withCredentials: true})
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})