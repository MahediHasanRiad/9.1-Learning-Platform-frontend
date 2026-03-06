import React from "react";
import TeachersPage from "../feature/Home/pages/Teachers.page";
import CoachingPage from "../feature/Home/pages/coaching";
import CoachingProfile from "../feature/coaching/pages/Coaching-Profile";
import { Route, Routes } from "react-router";
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



function App() {
  return (
    <section className="w-5/6 m-auto">
      <Routes>
        {/* auth  */}
        <Route path="/register" element={<TeachersPage />} />

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
        <Route path="/teacher/connected-coaching" element={<ConnectedCoaching />}/>

        {/* coaching  */}
        <Route path="/coaching/profile" element={<CoachingProfile />} />
        <Route path="/coaching/dashboard" element={<CoachingDashboard />} />
        <Route path="/coaching/staff" element={<CoachingStaff />} />
      </Routes>
    </section>
  );
}

export default App;
