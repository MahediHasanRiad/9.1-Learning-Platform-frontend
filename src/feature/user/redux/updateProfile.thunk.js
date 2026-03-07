import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateProfileAsyncThunk = createAsyncThunk('userSlice/updateProfile', async({id, data}, {rejectWithValue}) => {
  try {
    const response = await axios.patch(`/api/v1/users/${id}`, data, {withCredentials: true})
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})