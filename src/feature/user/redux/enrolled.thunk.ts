import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEnrolledBatchThunk = createAsyncThunk(
  "user/enrolled",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/v1/user/all-enrolled", {
        withCredentials: true,
      });
      return response.data.data;
    } 
    catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      }
      return rejectWithValue("error during fetch enrolled batch !!!");
    }
  },
);
