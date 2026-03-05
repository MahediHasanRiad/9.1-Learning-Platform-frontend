import DashboardLayout from "@/layout/dashboard-layout";
import MenuItem from "@/shared/components/menu-item";
import { UserPen, MonitorPlay, Book, Lock } from "lucide-react";
import { useTeacherDashboard } from "../hooks/useTeacherDashboard";
import UpdateProfile from "../components/update-profile";
import DemoClass from "../components/demo-class";

function TeacherDashboard() {
  const {
    updateProfile,
    demoClass,
    addSubject,
    resetPassword,
    handleUpdateProfile,
    handleDemoClass,
    handleAddSubject,
    handleResetPassword,
  } = useTeacherDashboard();

  return (
    <DashboardLayout
      menu={
        <>
          <MenuItem
            Icon={UserPen}
            text={"Update Profile"}
            onClick={handleUpdateProfile}
            className={`${updateProfile ? "text-secondary-0" : "text-text-0"}`}
          />
          <MenuItem
            Icon={MonitorPlay}
            text={"Add Demo Class"}
            onClick={handleDemoClass}
            className={`${demoClass ? "text-secondary-0" : "text-text-0"}`}
          />
          <MenuItem
            Icon={Book}
            text={"Add Subject"}
            onClick={handleAddSubject}
            className={`${addSubject ? "text-secondary-0" : "text-text-0"}`}
          />
          <MenuItem
            Icon={Lock}
            text={"Reset Password"}
            onClick={handleResetPassword}
            className={`${resetPassword ? "text-secondary-0" : "text-text-0"}`}
          />
        </>
      }
    >
      {/* main section  */}
      <main>
        {updateProfile && <UpdateProfile />}
        {demoClass && <DemoClass />}
        {addSubject && <h1>this is addSubject</h1>}
        {resetPassword && <h1>this is resetPassword</h1>}
      </main>
    </DashboardLayout>
  );
}

export default TeacherDashboard;
