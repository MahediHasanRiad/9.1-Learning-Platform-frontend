import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../feature/auth/redux/auth.slice';
import userReducer from '../feature/user/redux/user.slice';
import teacherReducer from '../feature/teacher/redux/teacher.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    teacher: teacherReducer,
  }
})