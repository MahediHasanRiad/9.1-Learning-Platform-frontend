import DashboardLayout from "@/layout/dashboard-layout";
import MenuItem from "@/shared/utils/menu-item";
import { UserPen, MonitorPlay, Book, Lock } from "lucide-react";
import { useTeacherDashboard } from "../hooks/useTeacherDashboard";
import UpdateProfile from "../components/update-profile";
import DemoClass from "../../../shared/components/demo-class";
import AddNewSubject from "../../../shared/components/add-new-subject";
import ResetPassword from "../../../shared/components/reset-password";

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
        {addSubject && <AddNewSubject />}
        {resetPassword && <ResetPassword />}
      </main>
    </DashboardLayout>
  );
}

export default TeacherDashboard;
