import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStaffThunk = createAsyncThunk(
  "coaching/staff",
  async (_, { rejectWithValue }) => {
    try {
      const staff = await api.get("/api/v1/coaching-staffs", {
        withCredentials: true,
      });
      return staff.data.data;
    } 
    catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      }
      return rejectWithValue("error during fetch coaching staff");
    }
  },
);
