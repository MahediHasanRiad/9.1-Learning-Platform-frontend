import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const findUserByIdAsyncThunk = createAsyncThunk('userSlice/findUserById', async (id: string, {rejectWithValue}) => {
  try {
    const response = await api.get(`/api/v1/users/${id}`, {withCredentials: true})
    return response.data;
  } 
  catch (error: unknown) {
    if(axios.isAxiosError(error)){
      return rejectWithValue(error.response?.data?.message || error.message)
    }
    return rejectWithValue('Error during get user profile details !!!')
  }
})