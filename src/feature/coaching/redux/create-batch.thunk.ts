import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { ShowBatchType } from "../coaching-type";


export const createBatchAsyncThunk = createAsyncThunk<ShowBatchType, FormData, {rejectValue: string}>(
  "batchSlice/create",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/v1/batch", formData, {
        withCredentials: true,
      });

      return response.data.data;
    } 
    catch (error: unknown) {
      if(axios.isAxiosError(error)){
        return rejectWithValue(error.response?.data?.message || error.message);
      }
      return rejectWithValue('error during create batch');
    }
  },
);
