import { createSlice } from "@reduxjs/toolkit";
import { createTeacherAsyncThunk } from "./createTeacher.thunk";
import { updateTeacherProfileAsyncThunk } from "./profileUpdate.thunk";

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
    // create teacher
    builder
      .addCase(createTeacherAsyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTeacherAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.data;
      })
      .addCase(createTeacherAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // update teacher profile
    builder
      .addCase(updateTeacherProfileAsyncThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTeacherProfileAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.data
      })
      .addCase(updateTeacherProfileAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = teacherSlice.actions;
export default teacherSlice.reducer;
