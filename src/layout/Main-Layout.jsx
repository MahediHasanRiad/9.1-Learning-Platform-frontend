import ProfileDropdown from "@/feature/teacher/utils/Profile-DropDown.jsx";
import Menu from "./components/nav-menu.jsx";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { Link } from "react-router";

function MainLayout({children}) {
  const [open, setOpen] = useState(false);

  return (
   <section>
     <nav className="w-full my-4 bg-secondary-0/10 flex justify-center">
      <section className="w-5/6 p-3 flex items-center justify-between ">
        {/* Logo */}
        <div className="text-xl font-bold"><Link to={'/teachers'}>Logo</Link></div>

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

    {/* children section  */}
    <section className="w-full min-h-screen">
      {children}
    </section>

    {/* footer section  */}
    <section>
      <footer className="w-full min-h-10 bg-gray-200 mt-10">
        <p className="pt-2 text-center text-text-0 italic text-sm">@copyright by mahedihasanriad.</p>
      </footer>
    </section>
   </section>
  );
}

export default MainLayout;
