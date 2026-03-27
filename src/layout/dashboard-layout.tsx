import React, { useState, type ReactNode } from "react";
import MainLayout from "./Main-Layout";
import { Menu, X } from "lucide-react";

interface DashboardLayoutType {
  menu: ReactNode;
  children: ReactNode;
}

function DashboardLayout({ menu, children }: DashboardLayoutType) {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <MainLayout>
      <section className="">
        {/* menu btn  */}
        <section onClick={handleMenu} className="md:hidden w-full h-10">
          {open ? <X /> : <Menu />}
        </section>

        <section className="grid grid-cols-4">
          {/* left menu */}
          <aside className="col-span-1 hidden md:block">{menu}</aside>

          {/* right section */}
          <section className="col-span-3 md:w-full">{children}</section>
        </section>

        {/* toggle menu  */}
        {open && (
          <section>
            <h1>this is toggle</h1>
          </section>
        )}

        {/* toggle section  */}
        {open && (
          <>
            <div
              className="fixed inset-0 z-40 cursor-default"
              onClick={() => setOpen(false)}
            />
            <section className="absolute top-30 min-h-40 py-5 left-0 w-full bg-white z-50 hover:bg-white">
              {menu}
            </section>
          </>
        )}
      </section>
    </MainLayout>
  );
}

export default DashboardLayout;
