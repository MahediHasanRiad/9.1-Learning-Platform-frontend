import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const updateProfileAsyncThunk = createAsyncThunk('userSlice/updateProfile', async({id, formData}, {rejectWithValue}) => {
  try {
    const response = await api.patch(`/api/v1/users/${id}`, formData, {withCredentials: true})
    console.log('rr', formData)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message)
  }
})