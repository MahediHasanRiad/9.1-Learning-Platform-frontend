import React from "react";
import TeachersPage from "./pages/Teachers";
import Navbar from "./components/feature/nav";
import TeacherProfile from "./pages/Teacher-Profile";
import CoachingPage from "./pages/coaching";
import CoachingProfile from "./pages/Coaching-Profile";

function App() {
  return (
    <div className="bg-background m-auto">
      <section>
        <Navbar />
      </section>
      <section className="w-5/6 m-auto">
        {/* <TeachersPage /> */}
        {/* <TeacherProfile /> */}
        {/* <CoachingPage /> */}
        <CoachingProfile />
      </section>
    </div>
  );
}

export default App;
