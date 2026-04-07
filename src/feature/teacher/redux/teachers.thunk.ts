import { api } from "@/API/api-client";
import type { QueryParamsType } from "@/feature/auth/auth-type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTeachers = createAsyncThunk(
  "teachers/getAllTeachers",
  async (filterQuery: Partial<QueryParamsType>, { rejectWithValue }) => {
    try {
       const { search = "", limit = 10, page = 1, sortType = "asc" } = filterQuery;

      const res = await api.get(`/api/v1/teachers`, {
        withCredentials: true,
        params: { search, limit, page, sortType },
      });

      return res.data.data;
    } 
    catch (error: unknown) {
      if(axios.isAxiosError(error)){
        return rejectWithValue(error.response?.data?.message ?? "Failed to fetch teachers");
      }
      return rejectWithValue("Error during fetch teachers");
    }
  },
);
