import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateCoachingProfileAsynkThunk = createAsyncThunk(
  "coachingSlice/updateProfile",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
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
