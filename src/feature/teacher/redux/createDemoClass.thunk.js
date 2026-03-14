import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createDemoClassAsyncThunk = createAsyncThunk(
  "demoClassSlice/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(`/api/v1/demo-class`, data, {
        withCredentials: true,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
