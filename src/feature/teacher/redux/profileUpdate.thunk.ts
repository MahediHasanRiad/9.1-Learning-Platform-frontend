import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TeacherSliceType } from "../teacher-type";


interface UpdateTeacherType {
  id: string | undefined;
  formData: FormData;
}

interface ReturnUpdateProfileType {
  success: boolean;
  message: string;
  data: TeacherSliceType;
}

export const updateTeacherProfileAsyncThunk = createAsyncThunk<
  ReturnUpdateProfileType,
  UpdateTeacherType,
  { rejectValue: string }
>(
  "teacherSlice/updateProfile",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/api/v1/teachers/${id}`, formData, {
        withCredentials: true,
      });
      console.log('paramId', id)
      return response.data;
    } 
    catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
      return rejectWithValue("Error during update teacher profile");
    }
  },
);
