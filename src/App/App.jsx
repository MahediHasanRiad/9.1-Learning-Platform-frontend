import React, { useEffect } from "react";
import TeachersPage from "../feature/Home/pages/Teachers.page";
import CoachingPage from "../feature/Home/pages/coaching";
import CoachingProfile from "../feature/coaching/pages/Coaching-Profile";
import { Route, Routes, useLocation } from "react-router";
import Profile from "@/feature/user/pages/profile.page";
import UserDashboard from "@/feature/user/pages/dashboard.page";
import UserEnrolledBatch from "@/feature/user/pages/enrolled-batch.page";
import TeacherDashboard from "@/feature/teacher/pages/TeacherDashboard.page";
import TeacherEnrolledBatch from "@/feature/teacher/pages/enrolled-batch.page";
import About from "@/feature/Home/pages/about.page";
import Contact from "@/feature/Home/pages/contact.page";
import ConnectedCoaching from "@/feature/teacher/pages/connected-coaching.page";
import TeacherProfile from "@/feature/teacher/pages/profile.page";
import CoachingDashboard from "@/feature/coaching/pages/dashboard.page";
import CoachingStaff from "@/feature/coaching/pages/coaching-staff";
import Register from "@/feature/auth/pages/register.page";
import LogIn from "@/feature/auth/pages/login.page";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/feature/auth/redux/auth.slice";
import { toast } from "sonner";
import BecomeATeacher from "@/feature/teacher/pages/become-teacher.page";
import CreateCoaching from "@/feature/coaching/pages/create-coaching.page";
import Home from "@/feature/Home/pages/home.page";

function App() {

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const authRouter = ["/register", "/signin"];
    if (authRouter.includes(location.pathname)) return;

    ;(async () => {
      try {
        const response = await axios.get("/api/v1/me", {
          withCredentials: true,
        });
        dispatch(setUser(response.data.data));
      } catch (error) {
        toast.error(error.response?.data?.message || "Authentication failed");
      }
    })();
  }, []);

  return (
    <section>
      <Routes>
        {/* auth  */}
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<LogIn />} />

        {/* Home pages  */}
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/coaching-centers" element={<CoachingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/becomeTeacher" element={<BecomeATeacher />} />

        {/* user  */}
        <Route path="/user/profile/:id" element={<Profile />} />
        <Route path="/user/dashboard/:id" element={<UserDashboard />} />
        <Route path="/user/enrolled/:id" element={<UserEnrolledBatch />} />
        <Route path="/coaching" element={<CreateCoaching />} />

        {/* teacher  */}
        <Route path="/teacher/profile/:id" element={<TeacherProfile />} />
        <Route path="/teacher/dashboard/:id" element={<TeacherDashboard />} />
        <Route path="/teacher/enrolled/:id" element={<TeacherEnrolledBatch />} />
        <Route path="/teacher/connected-coaching/:id" element={<ConnectedCoaching />}/>

        {/* coaching  */}
        <Route path="/coaching/profile" element={<CoachingProfile />} />
        <Route path="/coaching/dashboard" element={<CoachingDashboard />} />
        <Route path="/coaching/staff" element={<CoachingStaff />} />
      </Routes>
    </section>
  );
}

export default App;
