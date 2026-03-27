import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DataType {
  staffId: string;
  role: "Admin" | "Manager" | "Teacher" | "Other";
}

interface ReturnType {
  success: boolean;
  message: string;
  data: DataType;
}

export const createCoachingStaffAsyncThunk = createAsyncThunk<ReturnType, DataType, {rejectValue: string}>(
  "coachingStaff/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/v1/coaching-staff", data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
      return rejectWithValue("error during create coaching staff");
    }
  },
);
