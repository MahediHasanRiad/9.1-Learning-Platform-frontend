import DashboardLayout from "@/layout/dashboard-layout";
import MenuItem from "@/shared/utils/menu-item";
import {
  UserPen,
  UserStar,
  Library,
  BriefcaseBusiness,
  Lock,
} from "lucide-react";
import { useCoachingDashboard } from "../hooks/useCoachingDashboard";
import UpdateProfile from "../components/Dashboard/Update-Profile";
import UpdateAdminProfile from "../components/Dashboard/Update-Admin-Profile";
import UpdateBatchInfo from "../components/Dashboard/Update-Batch-Info";
import CreateBatch from "../components/Dashboard/Create-Batch";
import AddNewStaff from "../components/Dashboard/Add-New-Staff";
import UpdateStaffRole from "../components/Dashboard/Update-Staff-Role";
import ResetPassword from "../components/Dashboard/reset-pasword";

function CoachingDashboard() {
  const {
    updateProfile,
    updateProfileHandler,
    updateAdminProfile,
    adminProfileHandler,
    updateBatchInfo,
    updateBatchInfoHandler,
    createBatch,
    createBatchHandler,
    addNewStaff,
    addNewStaffHandler,
    updateStaffRole,
    updateStaffRoleHandler,
    resetPassword,
    resetPasswordHandler,
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
            Icon={Library}
            text={"Update Batch info"}
            onClick={updateBatchInfoHandler}
            className={`${updateBatchInfo ? "text-secondary-0" : "text-text-0"}`}
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
            Icon={BriefcaseBusiness}
            text={"Update Staff Role"}
            onClick={updateStaffRoleHandler}
            className={`${updateStaffRole ? "text-secondary-0" : "text-text-0"}`}
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
      {updateBatchInfo && <UpdateBatchInfo />}
      {createBatch && <CreateBatch />}
      {addNewStaff && <AddNewStaff />}
      {updateStaffRole && <UpdateStaffRole />}
      {resetPassword && <ResetPassword />}
      
    </DashboardLayout>
  );
}

export default CoachingDashboard;
