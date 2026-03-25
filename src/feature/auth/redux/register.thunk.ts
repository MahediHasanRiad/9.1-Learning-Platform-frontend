import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RegisterInput, RegisterResponse } from "../auth-type";
import axios from "axios";

/**
 * authSlice/registration --> prefix of asyncThunk (like: authSlice/registration/{pending / fulfill / rejected})
 * authSlice/registration = {clice-name / what-to-do}
 */


export const registrationAsyncThunk = createAsyncThunk<RegisterResponse, RegisterInput,{ rejectValue: string }>(
  "authSlice/registration",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post<RegisterResponse>("/api/v1/register", data);
      return response.data;
    } 
    catch (error: unknown) {
      if(axios.isAxiosError(error)){
        return rejectWithValue(error.response?.data?.message || 'something went wrong');
      }
      console.log(error)
      return rejectWithValue('something went wrong in register !!!');
    }
  },
);
