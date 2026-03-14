import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 * authSlice/registration --> prefix of asyncThunk (like: authSlice/registration/{pending / fulfill / rejected})
 * authSlice/registration = {clice-name / what-to-do}
 */

export const registrationAsyncThunk = createAsyncThunk(
  "authSlice/registration",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/v1/register", data);
      return response.data;
    } catch (error) {
      console.log('er', error)
      return rejectWithValue(error.response?.data?.message || 'something went wrong');
    }
  },
);
