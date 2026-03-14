import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateProfileAsyncThunk = createAsyncThunk('userSlice/updateProfile', async({id, formData}, {rejectWithValue}) => {
  try {
    const response = await axios.patch(`/api/v1/users/${id}`, formData, {withCredentials: true})
    console.log('rr', formData)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})