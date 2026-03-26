import React, { useState } from "react";
import { Filter, X } from "lucide-react";

interface FilterItemType {
  search: string;
  children: React.ReactNode;
}

function FilterItems({search, children}: FilterItemType) {

  const [open, setOpen] = useState(false);

  return (
    <section className="w-full">
      {/* Top Bar (always visible) */}
      <div className="flex items-center gap-3">
        {/* search by name  */}
        {search}
       

        {/* Mobile toggle button */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Filter />}
        </button>
        
      </div>

      {/* Filters */}
      <div
        className={`
          ${open ? "flex" : "hidden"} 
          flex-col gap-3 mt-3
          lg:flex lg:flex-row lg:items-center lg:flex-wrap
        `}
      >
        {children}
      </div>
    </section>
  );
}

export default FilterItems;
