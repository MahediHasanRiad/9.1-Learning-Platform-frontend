import { useEffect } from "react";
import TeachersPage from "../feature/Home/pages/Teachers.page";
import CoachingProfile from "../feature/coaching/pages/Coaching-Profile";
import { Route, Routes, useLocation } from "react-router";
import Profile from "@/feature/user/pages/profile.page";
import UserDashboard from "@/feature/user/pages/dashboard.page";
import UserEnrolledBatch from "@/feature/user/pages/enrolled-batch.page";
import TeacherDashboard from "@/feature/teacher/pages/TeacherDashboard.page";
import About from "@/feature/Home/pages/about.page";
import Contact from "@/feature/Home/pages/contact.page";
import ConnectedCoaching from "@/feature/teacher/pages/connected-coaching.page";
import TeacherProfile from "@/feature/teacher/pages/profile.page";
import CoachingDashboard from "@/feature/coaching/pages/dashboard.page";
import CoachingStaff from "@/feature/coaching/pages/coaching-staff";
import Register from "@/feature/auth/pages/register.page";
import LogIn from "@/feature/auth/pages/login.page";
import { useDispatch } from "react-redux";
import { setCoaching, setTeacher, setUser } from "@/feature/auth/redux/auth.slice";
import BecomeATeacher from "@/feature/teacher/pages/become-teacher.page";
import CreateCoaching from "@/feature/coaching/pages/create-coaching.page";
import Home from "@/feature/Home/pages/home.page";
import CoachingBatch from "@/feature/coaching/pages/coaching-batch";
import BatchesPage from "../feature/Home/pages/batches";
import type { AppDispatch } from "@/store/store";
import { api } from "@/API/api-client";
// import EnrolledStudent from "@/feature/coaching/components/Dashboard/enrolled";



function App() {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect(() => {
    const authRouter = ["/register", "/signin"];
    if (authRouter.includes(location.pathname)) return;

    const fetchUserData = async () => {
      try {
        // user
        const userRes = await api.get("/api/v1/me", {
          withCredentials: true,
        });
        dispatch(setUser(userRes.data.data));

        // teacher
        // if (userRes) {
          const teacher = await api.get("/api/v1/self-teacher", {
            withCredentials: true,
          });
          dispatch(setTeacher(teacher.data.data));
        // }

        // coaching
        if (userRes) {
          const coachingRes = await api.get("/api/v1/coaching-center-by-user", {
            withCredentials: true,
          });
          dispatch(setCoaching(coachingRes.data.data));
        }
      } catch (error: any) {
        const message =
          error.response?.data?.message || "Authentication failed";
        console.log(typeof message === "string" ? message : "Error occurred");
      }
    };

    fetchUserData();
  }, [dispatch, location.pathname]);
  // dispatch, location.pathname



  return (
    <section>
      <Routes>
        {/* auth  */}
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<LogIn />} />

        {/* Home pages  */}
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/batches" element={<BatchesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/becomeTeacher" element={<BecomeATeacher />} />

        {/* user  */}
        <Route path="/user/profile/:id" element={<Profile />} />
        <Route path="/user/dashboard/:id" element={<UserDashboard />} />
        <Route path="/user/enrolled/:id" element={<UserEnrolledBatch />} />

        {/* teacher  */}
        <Route path="/teacher/profile/:id" element={<TeacherProfile />} />
        <Route path="/teacher/dashboard/:id" element={<TeacherDashboard />} />
        <Route
          path="/teacher/connected-coaching/:id"
          element={<ConnectedCoaching />}
        />

        {/* coaching  */}
        <Route path="/coaching" element={<CreateCoaching />} />
        <Route path="/coaching/profile" element={<CoachingProfile />} />
        <Route path="/coaching/dashboard/:id" element={<CoachingDashboard />} />
        <Route path="/coaching/staff/:id" element={<CoachingStaff />} />
        <Route path="/coaching/batch/:id" element={<CoachingBatch />} />
        {/* <Route path="/coaching/enrolled/:id" element={<EnrolledStudent />} /> */}
      </Routes>
    </section>
  );
}

export default App;
