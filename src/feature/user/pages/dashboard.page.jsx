import { Menu, X, UserPen, Lock } from 'lucide-react';
import { useState } from 'react';
import MenuItem from '../../../shared/components/menu-item';
import UpdateProfile from '../components/update-profile';
import ChangePassword from '../components/change-password';

function UserDashboard() {

  const [open, setOpen] = useState(false)
  const [updateProfile, setUpdateProfile] = useState(true)
  const [changePassword, setChangePassword] = useState(false)

  const handleMenu = () => {
    setOpen(!open)
  }

  const handleProfileUpdate = () => {
    setUpdateProfile(true)
    setChangePassword(false)
  }
  const handleChangePassword = () => {
    setUpdateProfile(false)
    setChangePassword(true)
  }


  return (
    <section className="">
      {/* top hidden section  */}
      <section onClick={handleMenu} className="hidden sm:block w-full h-10">
        {open ? <X /> : <Menu />}
      </section>
      <section className="grid grid-cols-4">
        {/* left  */}
        <section className="col-span-1">
          <MenuItem Icon={UserPen} text={'Update Profile'} onClick={handleProfileUpdate} />
          <MenuItem Icon={Lock} text={'Change Password'} onClick={handleChangePassword} />
        </section>
        {/* right  */}
        <section className="col-span-3">
          {updateProfile && <UpdateProfile />}
          {changePassword && <ChangePassword />}
        </section>
      </section>
    </section>
  );
}

export default UserDashboard;
