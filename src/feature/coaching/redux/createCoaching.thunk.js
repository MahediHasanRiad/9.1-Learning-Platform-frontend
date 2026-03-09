import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createCoachingAsyncThunk = createAsyncThunk(
  "coaching/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/v1/coaching", data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
