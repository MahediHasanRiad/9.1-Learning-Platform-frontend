import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const TeachersAsyncThunks = createAsyncThunk('teachers/getAllTeachers', async (data, {rejectWithValue}) => {
  try {
    
  } 
  catch (error: unknown) {
    if(axios.isAxiosError(error)){
      if(axios.isAxiosError(error)){
      return rejectWithValue(error.response?.data?.message || error.message)
    }
    return rejectWithValue('error during get all teachers')
    }
  }
})