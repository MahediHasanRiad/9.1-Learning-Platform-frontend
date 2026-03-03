import React from "react";
import TeachersPage from "../feature/teacher/pages/Teachers";
import Navbar from "../layout/nav";
import TeacherProfile from "../feature/teacher/pages/Teacher-Profile";
import CoachingPage from "../feature/coaching/pages/coaching";
import CoachingProfile from "../feature/coaching/pages/Coaching-Profile";
import { Route, Routes } from "react-router";
import Profile from "@/feature/user/pages/profile.page";
import UserDashboard from "@/feature/user/pages/dashboard.page";
import EnrolledBatch from "@/feature/user/pages/enrolled-batch.page";

function App() {
  return (
    <div className="bg-background m-auto">
      <section>
        <Navbar />
      </section>
      <section className="w-5/6 m-auto">
        <Routes>
          {/* user  */}
          <Route path="/user/profile" element={<Profile />}/>
          <Route path="/user/dashboard" element={<UserDashboard />}/>
          <Route path="/user/enrolled" element={<EnrolledBatch />}/>

          {/* teacher  */}
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/terachers/teachersProfile" element={<TeacherProfile />} />
          <Route path="/coaching" element={<CoachingPage />} />
          <Route path="/coaching/coachingProfile" element={<CoachingProfile />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
