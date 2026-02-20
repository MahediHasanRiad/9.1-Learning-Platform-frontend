import React, { useState } from "react";
import Dropdown from "@/utils/DropDown";
import Button from "@/utils/button";
import { Input } from "@/components/ui/input";
import { Filter, X } from "lucide-react";

function FilterItems() {

  const [open, setOpen] = useState(false);

  return (
    <section className="w-full">
      {/* Top Bar (always visible) */}
      <div className="flex items-center gap-3">
        {/* search by name  */}
        <Input
          className="flex-1 hover:border-secondary"
          placeholder="search..."
        />

        {/* Mobile toggle button */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Filter />}
        </button>

        {/* Desktop button */}
        <div className="hidden lg:block">
          <Button text="Submit" />
        </div>
      </div>

      {/* Filters */}
      <div
        className={`
          ${open ? "flex" : "hidden"} 
          flex-col gap-3 mt-3
          lg:flex lg:flex-row lg:items-center lg:flex-wrap
        `}
      >
        <Dropdown
          title="Subject"
          items={["Bangla", "English", "Math", "ICT"]}
        />
        <Dropdown title="Class" items={["10th", "9th", "11th", "12th"]} />
        <Dropdown title="Rating" items={["4.5+", "4.0+", "3.5+", "3.0+"]} />
        <Dropdown title="SortType" items={["asc", "desc"]} />
        <Dropdown title="SortBy" items={["updatedAt"]} />
        <Dropdown title="Limit" items={["10", "25", "50"]} />

        {/* Mobile button */}
        <div className="lg:hidden">
          <Button className="w-full" text="Submit" />
        </div>
      </div>
    </section>
  );
}

export default FilterItems;
