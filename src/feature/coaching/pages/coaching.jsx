import React from "react";
import FilterItems from "@/feature/teacher/utils/filter";
import Button from "@/shared/components/button";
import InputField from "@/shared/components/input";
import Dropdown from "@/feature/teacher/utils/DropDown";
import CoachingBatchCard from "@/feature/coaching/components/CoachingBatchCard";
import PaginationItems from "@/shared/components/Pagination";

function CoachingPage() {
  return (
    <section>
      {/* ----------------------- Filter ---------------------- */}
      <section>
        {/* search  */}
        <FilterItems
          search={
            <>
              <InputField placeholder={"search..."} />
              <Button text={"Submit"} />
            </>
          }
        >
          {/* children  */}
          <Dropdown
            title="Address"
            items={["Mirput", "Uttora", "Farmgate", "New Market"]}
          />
          <Dropdown title="Class" items={["10th", "9th", "11th", "12th"]} />
          <Dropdown
            title="Subject"
            items={["Math", "English", "ICT", "Math 2"]}
          />
          <Dropdown title="Rating" items={["4.5+", "4.0+", "3.5+", "3.0+"]} />
          <Dropdown title="SortType" items={["asc", "desc"]} />
          <Dropdown title="SortBy" items={["updatedAt"]} />
          <Dropdown title="Limit" items={["10", "25", "50"]} />
        </FilterItems>
      </section>

      {/* ------------------------------------ batches ----------------------------------- */}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-6">
        <CoachingBatchCard
          image={"https://avatar.vercel.sh/shadcn1"}
          name={"Batch Alfa new"}
          classes={"Class-8"}
          subjects={["Math, English, Bangla"]}
          rating={"4.5"}
        />
      </section>

      {/* -------------------------- Pagination --------------------- */}
      <section>
        <PaginationItems />
      </section>
    </section>
  );
}

export default CoachingPage;
