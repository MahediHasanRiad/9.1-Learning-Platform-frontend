import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../feature/auth/redux/auth.slice';
import userReducer from '../feature/user/redux/user.slice';
import teacherReducer from '../feature/teacher/redux/teacher.slice';
import subjectReducer from '../feature/teacher/redux/subject.slice';
// import demoClassReducer from '../feature/teacher/redux/demoClass.slice';
import coachingReducer from '../feature/coaching/redux/coaching.slice';
// import coachingStaffReducer from '../feature/coaching/redux/coaching-staff.slice';
// import coachingBatchReducer from '../feature/coaching/redux/coaching-batch.slice'



export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    teacher: teacherReducer,
    coaching: coachingReducer,
    subject: subjectReducer,
    // demoClass: demoClassReducer,
    // coachingStaff: coachingStaffReducer,
    // batch: coachingBatchReducer,

    
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch