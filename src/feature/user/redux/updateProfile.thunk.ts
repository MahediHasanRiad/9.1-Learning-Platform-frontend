import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { UserType } from "../user-type";

interface Updatetype {
  id: string | undefined;
  formData: FormData;
}

export const updateProfileAsyncThunk = createAsyncThunk<
  Partial<UserType>,
  Updatetype,
  { rejectValue: string }
>("userSlice/updateProfile", async ({ id, formData }, { rejectWithValue }) => {
  try {
    const response = await api.patch(`/api/v1/users/${id}`, formData, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
    return rejectWithValue("error during update profile !!!");
  }
});
