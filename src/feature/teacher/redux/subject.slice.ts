import { createSlice } from "@reduxjs/toolkit";
import { createSubjectAsyncThunk } from "./createSubject.thunk";
import { subjectListByTeacherAsyncThunk } from "./subjectListByTeacher.thunk";
import type { SubjectType } from "../teacher-type";

export interface SubjectSliceType {
  subject: SubjectType | null;
  loading: boolean;
  error: null | undefined | string | unknown
}

const initialState: SubjectSliceType = {
  subject: null,
  loading: true,
  error: null,
};

export const subjectSlice = createSlice({
  name: "subjectSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // create
    builder
      .addCase(createSubjectAsyncThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createSubjectAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.subject = action.payload.data;
      })
      .addCase(createSubjectAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // subject list by teacher
    builder
      .addCase(subjectListByTeacherAsyncThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(subjectListByTeacherAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.subject = action.payload.data;
      })
      .addCase(subjectListByTeacherAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = subjectSlice.actions;
export default subjectSlice.reducer;
