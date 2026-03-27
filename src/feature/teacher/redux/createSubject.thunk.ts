import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { CreateSubjectType, SubjectType } from "../teacher-type";

interface ReturnSubjectType {
  success: boolean;
  message: string;
  data: SubjectType;
}

export const createSubjectAsyncThunk = createAsyncThunk<
  ReturnSubjectType,
  CreateSubjectType,
  { rejectValue: string }
>("teacherSlice/createSubject", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post("/api/v1/subject", data, {
      withCredentials: true,
    });
    return response.data;
  } 
  catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
    return rejectWithValue("error during create subject");
  }
});
