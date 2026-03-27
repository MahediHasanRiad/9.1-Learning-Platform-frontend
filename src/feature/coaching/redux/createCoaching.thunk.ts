import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { CreateCoachingType } from "../coaching-type";

interface ReturnCoachingType {
  success: boolean;
  message: string;
  data: CreateCoachingType;
}

export const createCoachingAsyncThunk = createAsyncThunk<ReturnCoachingType, CreateCoachingType, {rejectValue: string}>(
  "coaching/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/v1/coaching", data, {
        withCredentials: true,
      });
      return response.data;
    } 
    catch (error: unknown) {
      if(axios.isAxiosError(error)){
        return rejectWithValue(error.response?.data?.message || error.message);
      }
      return rejectWithValue('error during create coaching center');
    }
  },
);
