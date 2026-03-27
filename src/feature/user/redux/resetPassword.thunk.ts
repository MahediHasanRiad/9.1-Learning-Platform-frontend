import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ResetPassType {
  oldPassword: string;
  newPassword: string;
}

interface ReturnResetPass {
  success: boolean;
  message: string;
}

export const resetPasswordAsyncThunk = createAsyncThunk<
  ReturnResetPass,
  ResetPassType,
  { rejectValue: string }
>("userSlice/resetPassword", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post("/api/v1/changePassword", data, {
      withCredentials: true,
    });
    return response.data;
  } 
  catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
    return rejectWithValue("error during password change !!!");
  }
});
