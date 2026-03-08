import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../feature/auth/redux/auth.slice';
import userReducer from '../feature/user/redux/user.slice';
import teacherReducer from '../feature/teacher/redux/teacher.slice';
import subjectReducer from '../feature/teacher/redux/subject.slice';
import demoClassReducer from '../feature/teacher/redux/demoClass.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    teacher: teacherReducer,
    subject: subjectReducer,
    demoClass: demoClassReducer,
  }
})