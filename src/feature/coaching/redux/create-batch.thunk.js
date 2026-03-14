import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createBatchAsyncThunk = createAsyncThunk(
  "batchSlice/create",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/v1/batch", formData, {
        withCredentials: true,
      });
      console.log('re', response.data.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
