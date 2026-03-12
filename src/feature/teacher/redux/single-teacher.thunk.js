import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SingleTeacherAsyncThunk = createAsyncThunk('teacherSlice/singleTeacher', async (id, {rejectWithValue}) => {
  try {
    const response = await axios.get(`/api/v1/teachers/${id}`, {withCredentials: true})
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})