import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateTeacherProfileAsyncThunk = createAsyncThunk('teacherSlice/updateProfile', async ({id, formData}, {rejectWithValue}) => {
  try {
    console.log('data', formData)
    const response = await axios.patch(`/api/v1/teachers/${id}`, formData, {withCredentials: true})
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})