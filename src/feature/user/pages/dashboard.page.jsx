import { Menu, X, UserPen, Lock } from "lucide-react";
import { useState } from "react";
import MenuItem from "../../../shared/components/menu-item";
import UpdateProfile from "../components/update-profile";
import ChangePassword from "../components/change-password";

function UserDashboard() {
  const [open, setOpen] = useState(false);
  const [updateProfile, setUpdateProfile] = useState(true);
  const [changePassword, setChangePassword] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleProfileUpdate = () => {
    setUpdateProfile(true);
    setChangePassword(false);
  };
  const handleChangePassword = () => {
    setUpdateProfile(false);
    setChangePassword(true);
  };

  return (
    <section className="">
      {/* top hidden section  */}
      <section onClick={handleMenu} className="md:hidden w-full h-10">
        {open ? <X /> : <Menu />}
      </section>
      <section className="grid grid-cols-4">
        {/* left  */}
        <section className="col-span-1 hidden md:block">
          <MenuItem
            Icon={UserPen}
            text={"Update Profile"}
            onClick={handleProfileUpdate}
          />
          <MenuItem
            Icon={Lock}
            text={"Change Password"}
            onClick={handleChangePassword}
          />
        </section>
        {/* right  */}
        <section className="col-span-3 md:w-full">
          {updateProfile && <UpdateProfile />}
          {changePassword && <ChangePassword />}
        </section>
      </section>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setOpen(false)}
          />
          <section className="absolute top-30 min-h-40 py-5 left-0 w-full bg-white z-50 hover:bg-white">
            <MenuItem
              Icon={UserPen}
              text={"Update Profile"}
              onClick={() => {handleProfileUpdate(); setOpen(false)}}
            />
            <MenuItem
              Icon={Lock}
              text={"Change Password"}
              onClick={() => {handleChangePassword(); setOpen(false)}}
            />
          </section>
        </>
      )}
    </section>
  );
}

export default UserDashboard;
