import { createSlice } from "@reduxjs/toolkit";
import { createTeacherAsyncThunk } from "./createTeacher.thunk";

const initialState = {
  user: null,
  demoVideos: null,
  loading: false,
  error: false,
};

const teacherSlice = createSlice({
  name: "teacherSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTeacherAsyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTeacherAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        console.log("asy", action.payload);
      })
      .addCase(createTeacherAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = teacherSlice.actions;
export default teacherSlice.reducer;
