import ProfileDropdown from "@/utils/Profile-DropDown.jsx";
import Menu from "./menu.jsx";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full my-4 bg-primary-0 flex justify-center">
      <section className="w-5/6 p-3 flex items-center justify-between ">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          <Menu text="Teacher" path={'teachers'} />
          <Menu text="Coaching" path={'coaching'} />
          <Menu text="About" />
          <Menu text="Contact" />
          <ProfileDropdown />
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
            <ProfileDropdown />
          </div>
        )}
      </section>
    </nav>
  );
}

export default Navbar;
