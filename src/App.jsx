import React from "react";
import TeachersPage from "./pages/Teachers";
import Navbar from "./components/feature/nav";
import TeacherProfile from "./pages/Teacher-Profile";
import CoachingPage from "./pages/coaching";
import CoachingProfile from "./pages/Coaching-Profile";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="bg-background m-auto">
      <section>
        <Navbar />
      </section>
      <section className="w-5/6 m-auto">
        <Routes>
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
