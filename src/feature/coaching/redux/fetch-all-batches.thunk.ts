import { api } from "@/API/api-client";
import type { QueryParamsType } from "@/feature/auth/auth-type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllBatchesThunk = createAsyncThunk(
  "batch/getAllBatch",
  async (filterData: Partial<QueryParamsType>, { rejectWithValue }) => {
    try {
      const { search, limit, page, sortType } = filterData;

      const res = await api.get(`/api/v1/all-batches`, {
        withCredentials: true,
        params: { search, limit, page, sortType },
      });

      return res.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      }
      return rejectWithValue("error during get batches");
    }
  },
);
