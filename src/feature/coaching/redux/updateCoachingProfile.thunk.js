import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const updateCoachingProfileAsynkThunk = createAsyncThunk(
  "coachingSlice/updateProfile",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await api.patch(
        `/api/v1/coaching-centers/${id}`,
        formData,
        { withCredentials: true },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
