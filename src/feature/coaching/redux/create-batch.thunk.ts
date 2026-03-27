import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { ShowBatchType } from "../coaching-type";

interface ReturnType {
  success: boolean;
  message: string;
  data: ShowBatchType;
}


export const createBatchAsyncThunk = createAsyncThunk<ReturnType, FormData, {rejectValue: string}>(
  "batchSlice/create",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/v1/batch", formData, {
        withCredentials: true,
      });
      console.log('re', response.data.data)
      return response.data;
    } catch (error: unknown) {
      if(axios.isAxiosError(error)){
        return rejectWithValue(error.response?.data?.message || error.message);
      }
      return rejectWithValue('error during create batch');
    }
  },
);
