import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { DemoClassType } from "../teacher-type";

interface ReturnType {
  success: boolean;
  message: string;
}

export const createDemoClassAsyncThunk = createAsyncThunk<ReturnType, DemoClassType, {rejectValue: string}>(
  "demoClassSlice/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(`/api/v1/demo-class`, data, {
        withCredentials: true,
      });
      console.log(response.data);
      return response.data;
    } catch (error: unknown) {
      if(axios.isAxiosError(error)){
        return rejectWithValue(error.response?.data?.message || error.message);
      }
      return rejectWithValue('error during Demo class create !!!');
    }
  },
);
