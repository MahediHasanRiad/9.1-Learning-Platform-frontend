import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { CoachingType } from "../coaching-type";
import axios from "axios";

interface ReturnType {
  success: boolean;
  message: string;
  data: Partial<CoachingType>
}
interface UpdateProfile {
  id: string | undefined;
  formData: FormData;
}

export const updateCoachingProfileAsynkThunk = createAsyncThunk<ReturnType, UpdateProfile, {rejectValue: string}>(
  "coachingSlice/updateProfile",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await api.patch(
        `/api/v1/coaching-centers/${id}`,
        formData,
        { withCredentials: true },
      );
      return response.data;
    } catch (error: unknown) {
      if(axios.isAxiosError(error)){
        return rejectWithValue(error.response?.data?.message || error.message);
      }
      return rejectWithValue('error during update coaching !!!');
    }
  },
);
