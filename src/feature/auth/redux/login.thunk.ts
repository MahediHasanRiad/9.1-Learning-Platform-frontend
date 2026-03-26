import { api } from "@/API/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { LoginInput, LoginReturnType, User } from "../auth-type";


export const loginAsyncThunk = createAsyncThunk<
  LoginReturnType,
  LoginInput,
  { rejectValue: string }
>("authSlice/login", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post("/api/v1/login", data, {
      withCredentials: true,
    });
    return response.data;
  } 
  catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      return rejectWithValue(e.response?.data?.message || e.message);
    }
    return rejectWithValue("something went wrong in Login !!!");
  }
});
