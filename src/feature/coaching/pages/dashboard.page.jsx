import DashboardLayout from "@/layout/dashboard-layout";
import MenuItem from "@/shared/utils/menu-item";
import {
  UserPen,
  UserStar,
  Library,
  BriefcaseBusiness,
  Lock,
  BookA,
  Ticket,
} from "lucide-react";
import { useCoachingDashboard } from "../hooks/useCoachingDashboard";
import UpdateProfile from "../components/Dashboard/Update-Profile";
import UpdateAdminProfile from "../components/Dashboard/Update-Admin-Profile";
import CreateBatch from "../components/Dashboard/Create-Batch";
import AddNewStaff from "../components/Dashboard/Add-New-Staff";
import ResetPassword from "@/shared/components/reset-password";
import AddNewSubject from "@/shared/components/add-new-subject";
import EnrolledStudent from "../components/Dashboard/enrolled";


function CoachingDashboard() {
  const {
    updateProfile,
    updateProfileHandler,
    updateAdminProfile,
    adminProfileHandler,
    createBatch,
    createBatchHandler,
    addNewStaff,
    addNewStaffHandler,
    resetPassword,
    resetPasswordHandler,
    addSubject,
    addSubjectHandler,
    enrolled,
    enrolledHandler
  } = useCoachingDashboard();

  return (
    <DashboardLayout
      menu={
        <>
          <MenuItem
            Icon={UserPen}
            text={"Update Profile"}
            onClick={updateProfileHandler}
            className={`${updateProfile ? "text-secondary-0" : "text-text-0"}`}
          />
          <MenuItem
            Icon={UserStar}
            text={"Admin Profile"}
            onClick={adminProfileHandler}
            className={`${updateAdminProfile ? "text-secondary-0" : "text-text-0"}`}
          />
          <MenuItem
            Icon={BookA}
            text={"Add Subject"}
            onClick={addSubjectHandler}
            className={`${addSubject ? "text-secondary-0" : "text-text-0"}`}
          />
          <MenuItem
            Icon={Library}
            text={"Create new Batch"}
            onClick={createBatchHandler}
            className={`${createBatch ? "text-secondary-0" : "text-text-0"}`}
          />
          <MenuItem
            Icon={BriefcaseBusiness}
            text={"Add new Staff"}
            onClick={addNewStaffHandler}
            className={`${addNewStaff ? "text-secondary-0" : "text-text-0"}`}
          />
          <MenuItem
            Icon={Ticket}
            text={"Enrolled"}
            onClick={enrolledHandler}
            className={`${enrolled ? "text-secondary-0" : "text-text-0"}`}
          />
          <MenuItem
            Icon={Lock}
            text={"Reset Password"}
            onClick={resetPasswordHandler}
            className={`${resetPassword ? "text-secondary-0" : "text-text-0"}`}
          />
        </>
      }
    >
      {updateProfile && <UpdateProfile />}
      {updateAdminProfile && <UpdateAdminProfile />}
      {addSubject && <AddNewSubject />}
      {createBatch && <CreateBatch />}
      {addNewStaff && <AddNewStaff />}
      {enrolled && <EnrolledStudent />}
      {resetPassword && <ResetPassword />}
      
    </DashboardLayout>
  );
}

export default CoachingDashboard;
