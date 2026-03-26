import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logoutAsyncThunk = createAsyncThunk("authSlice/logout", async (_, {rejectWithValue}) => {
  try {
    const response = await api.get('/api/v1/logout', {withCredentials: true})
    return response.data
  } catch (error: unknown) {
    if(axios.isAxiosError(error)){
      return rejectWithValue(error.response?.data?.message || error.message)
    }
    return rejectWithValue('something went wrong in Logout !!!')
  }
})