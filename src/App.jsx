import React from "react";
import TeachersPage from "./pages/Teachers";
import Navbar from "./components/feature/nav";
import TeacherProfile from "./pages/Teacher-Profile";

function App() {
  return (
    <div className="bg-background m-auto">
      <section>
        <Navbar />
      </section>
      <section className="w-5/6 m-auto">
        {/* <TeachersPage /> */}
        <TeacherProfile />
      </section>
    </div>
  );
}

export default App;
