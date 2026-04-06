import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TeacherSliceType } from "../teacher-type";

interface ReturnType {
  message: string;
  success: boolean;
  data: TeacherSliceType;
}

export const SingleTeacherAsyncThunk = createAsyncThunk<
  ReturnType,
  string,
  { rejectValue: string }
>("teacherSlice/teachers", async (id, { rejectWithValue }) => {
  try {
    const response = await api.get(`/api/v1/teachers/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
    return rejectWithValue("Error during Get Single Teacher");
  }
});
