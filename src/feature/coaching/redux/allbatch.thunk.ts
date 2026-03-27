import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { ShowBatchType } from "../coaching-type";

interface ReturnType {
  success: boolean;
  message: string;
  data: ShowBatchType[];
}

export const AllBatchByCoachingThunk = createAsyncThunk<ReturnType, ShowBatchType[], {rejectValue: string}>(
  "coachingSlice/allbatch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/v1/coaching-staffs?role=Teacher`, {
        withCredentials: true
      });
      return response.data
    } 
    catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("error during get all batch by coaching");
    }
  },
);
