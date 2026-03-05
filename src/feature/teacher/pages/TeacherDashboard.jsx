import DashboardLayout from "@/layout/dashboard-layout";
import MenuItem from "@/shared/components/menu-item";
import { UserPen, MonitorPlay, Book, Lock } from "lucide-react";
import { useTeacherDashboard } from "../hooks/useTeacherDashboard";
import UpdateProfile from "../components/update-profile";

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
          <MenuItem Icon={UserPen} text={"Update Profile"} onClick={handleUpdateProfile}/>
          <MenuItem Icon={MonitorPlay} text={"Add Demo Class"} onClick={handleDemoClass}/>
          <MenuItem Icon={Book} text={"Add Subject"} onClick={handleAddSubject}/>
          <MenuItem Icon={Lock} text={"Reset Password"} onClick={handleResetPassword}/>
        </>
      }
    >
      {/* main section  */}
      <main>
        {updateProfile && (<UpdateProfile />)}
        {demoClass && (<h1>this is demoClass</h1>)}
        {addSubject && (<h1>this is addSubject</h1>)}
        {resetPassword && (<h1>this is resetPassword</h1>)}
      </main>
    </DashboardLayout>
  );
}

export default TeacherDashboard;
