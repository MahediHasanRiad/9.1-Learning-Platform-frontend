import ProfileDropdown from "@/layout/components/Profile-DropDown.js";
import Menu from "./components/nav-menu.js";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import Button from "@/shared/utils/button.js";
import logo from '../../public/images/logo.png'
import type { RootState } from "@/store/store.js";

interface childrenType {
  children: React.ReactNode; // ReactNode covers anything that can be render
}

function MainLayout({ children }: childrenType) {
  const [open, setOpen] = useState(false);
  
  // role
  const { user, teacher, role } = useSelector((state: RootState) => state.auth);

  return (
    <section className="w-5/6 m-auto">
      <nav className="w-full my-4 flex justify-center">
        <section className="w-5/6 p-3 flex items-center justify-between ">
          {/* Logo */}
          <div className="text-xl font-bold w-50 h-auto">
            <Link to={"/"}>
              <img src={logo} alt="" className="object-cover" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6 items-center">
            <Menu text="Teacher" path={"teachers"} />
            <Menu text="Coaching" path={"batches"} />
            <Menu text="About" path="about" />
            <Menu text="Contact" path="contact" />
            {user ? (
              <div>
                {role === "User" && (
                  <ProfileDropdown
                    profile={true}
                    profilePath={`/user/profile/${user?._id}`}
                    dashboard={true}
                    dashboardPath={`/user/dashboard/${user?._id}`}
                    enrolledBatch={true}
                    enrolledBatchPath={`/user/enrolled/${user?._id}`}
                    becomeTeacher={true}
                    becomeTeacherPath="/becomeTeacher"
                    coachingPage={true}
                    coachingPagePath="/coaching"
                  />
                )}
                {role === "Teacher" && (
                  <ProfileDropdown
                    profile={true}
                    profilePath={`/teacher/profile/${teacher?._id}`}
                    dashboard={true}
                    dashboardPath={`/teacher/dashboard/${teacher?._id}`}
                    enrolledBatch={true}
                    enrolledBatchPath={`/user/enrolled/${user?._id}`}
                    connectedBatch={true}
                    connectedCoachingPath={`/teacher/connected-coaching/${user?._id}`}
                    coachingPage={true}
                    coachingPagePath="/coaching"
                    becomeUser={true}
                    becomeUserPath="/teachers"
                  />
                )}
                {role === "Coaching" && (
                  <ProfileDropdown
                    profile={true}
                    profilePath={`/coaching/profile/${user._id}`}
                    dashboard={true}
                    dashboardPath={`/coaching/dashboard/${user._id}`}
                    coachingStaff={true}
                    coachingStaffPath={`/coaching/staff/${user._id}`}
                    coachingBatch={true}
                    coachingBatchPath={`/coaching/batch/${user._id}`}
                    enrolled={true}
                    enrolledPath={`/coaching/enrolled/${user._id}`}
                    becomeUser={true}
                    becomeUserPath={`/teachers/${user._id}`}
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
            <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 lg:hidden z-50">
              <Menu text="Teacher" path={"teachers"} />
              <Menu text="Coaching" path={"batches"} />
              <Menu text="About" path="about" />
              <Menu text="Contact" path="contact" />
              {role === "User" && (
                <ProfileDropdown
                  profile={true}
                  profilePath={`/user/profile/${user?._id}`}
                  dashboard={true}
                  dashboardPath={`/user/dashboard/${user?._id}`}
                  enrolledBatch={true}
                  enrolledBatchPath={`/user/enrolled/${user?._id}`}
                  becomeTeacher={true}
                  becomeTeacherPath="/becomeTeacher"
                  coachingPage={true}
                  coachingPagePath="/coaching"
                />
              )}
              {role === "Teacher" && (
                <ProfileDropdown
                  profile={true}
                  profilePath={`/teacher/profile/${teacher?._id}`}
                  dashboard={true}
                  dashboardPath={`/teacher/dashboard/${teacher?._id}`}
                  enrolledBatch={true}
                  enrolledBatchPath={`/user/enrolled/${user?._id}`}
                  connectedBatch={true}
                  connectedCoachingPath={`/teacher/connected-coaching/${user?._id}`}
                  coachingPage={true}
                  coachingPagePath="/coaching"
                  becomeUser={true}
                  becomeUserPath="/teachers"
                />
              )}
              {role === "Coaching" && (
                <ProfileDropdown
                  profile={true}
                  profilePath="/coaching/profile"
                  dashboard={true}
                  dashboardPath="/coaching/dashboard"
                  coachingStaff={true}
                  coachingStaffPath={"/coaching/staff"}
                  coachingBatch={true}
                  coachingBatchPath="/coaching/batch"
                  enrolled={true}
                  enrolledPath="/coaching/enrolled"
                  becomeUser={true}
                  becomeUserPath="/teachers"
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
