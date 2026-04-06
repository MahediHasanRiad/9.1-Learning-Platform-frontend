import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const AllBatchByCoachingThunk = createAsyncThunk(
  "coaching/allbatch",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/v1/all-batch-in-coaching/${id}`, {
        withCredentials: true
      });
      return response.data.data;
    } 
    catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("error during get all batch by coaching");
    }
  },
);
