import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const findUserByIdAsyncThunk = createAsyncThunk('userSlice/findUserById', async (id, {rejectWithValue}) => {
  try {
    const response = await axios.get(`/api/v1/users/${id}`, {withCredentials: true})
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})