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

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const authRouter = ["/register", "/signin"];
    if (authRouter.includes(location.pathname)) return;

    (async () => {
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
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* user  */}
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/enrolled" element={<UserEnrolledBatch />} />

        {/* teacher  */}
        <Route path="/teacher/profile" element={<TeacherProfile />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/enrolled" element={<TeacherEnrolledBatch />} />
        <Route
          path="/teacher/connected-coaching"
          element={<ConnectedCoaching />}
        />

        {/* coaching  */}
        <Route path="/coaching/profile" element={<CoachingProfile />} />
        <Route path="/coaching/dashboard" element={<CoachingDashboard />} />
        <Route path="/coaching/staff" element={<CoachingStaff />} />
      </Routes>
    </section>
  );
}

export default App;
