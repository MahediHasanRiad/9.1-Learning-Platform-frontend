import ProfileDropdown from "@/feature/teacher/utils/Profile-DropDown.jsx";
import Menu from "./components/nav-menu.jsx";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import Button from "@/shared/utils/button.jsx";

function MainLayout({ children }) {
  const [open, setOpen] = useState(false);
  // role
  const { user } = useSelector((state) => state.auth);

  return (
    <section className="w-5/6 m-auto">
      <nav className="w-full my-4 flex justify-center">
        <section className="w-5/6 p-3 flex items-center justify-between ">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link to={"/teachers"}>Logo</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6 items-center">
            <Menu text="Teacher" path={"teachers"} />
            <Menu text="Coaching" path={"coaching"} />
            <Menu text="About" path="about" />
            <Menu text="Contact" path="contact" />
            {user ? (
              <div>
                {user.role === "User" && (
                  <ProfileDropdown
                    profile={true}
                    profilePath={`/user/profile/${user._id}`}
                    dashboard={true}
                    dashboardPath={`/user/dashboard/${user._id}`}
                    enrolledBatch={true}
                    enrolledBatchPath={`/user/enrolled/${user._id}`}
                    becomeTeacher={true}
                    becomeTeacherPath="/becomeTeacher"
                  />
                )}
                {user.role === "Teacher" && (
                  <ProfileDropdown
                    profile={true}
                    profilePath="/teacher/profile"
                    dashboard={true}
                    dashboardPath="/teacher/dashboard"
                    enrolledBatch={true}
                    enrolledBatchPath="/teacher/enrolled"
                    connectedBatch={true}
                    connectedCoachingPath="/teacher/connected-coaching"
                    becomeUser="/teacher/user"
                    becomeUserPath="/teacher/user"
                  />
                )}
                {user.role === "Coaching" && (
                  <ProfileDropdown
                    profile={true}
                    profilePath="/coaching/profile"
                    dashboard={true}
                    dashboardPath="/coaching/dashboard"
                    coachingStaff={true}
                    coachingStaffPath={"/coaching/staff"}
                    // coachingBatch={true}
                    // coachingBatchPath='coaching/batches'
                  />
                )}
              </div>
            ) : (
              <Link to={"/signin"}>
                <Button text={"Log In"} />
              </Link>
            )}
          </div>

          {/* Mobile Button */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <MenuIcon />}
          </button>

          {/* Mobile Menu */}
          {open && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 lg:hidden">
              <Menu text="Teacher" />
              <Menu text="Coaching" />
              <Menu text="About" />
              <Menu text="Contact" />
              {user && (
                <ProfileDropdown
                  profile={true}
                  profilePath="/user/profile"
                  dashboard={true}
                  dashboardPath="/user/dashboard"
                  enrolledBatch={true}
                  enrolledBatchPath="/user/enrolled"
                />
              )}
              {teacher && (
                <ProfileDropdown
                  profile={true}
                  profilePath="/user/profile"
                  dashboard={true}
                  dashboardPath="/teacher/dashboard"
                  enrolledBatch={true}
                  enrolledBatchPath="/teacher/enrolled"
                  connectedBatch={true}
                  connectedCoachingPath="/teacher/connected-coaching"
                />
              )}
            </div>
          )}
        </section>
      </nav>

      {/* children section  */}
      <section className="w-full min-h-screen">{children}</section>

      {/* footer section  */}
      <section>
        <footer className="w-full min-h-10 bg-gray-200 mt-10">
          <p className="pt-2 text-center text-text-0 italic text-sm">
            @copyright by mahedihasanriad.
          </p>
        </footer>
      </section>
    </section>
  );
}

export default MainLayout;
