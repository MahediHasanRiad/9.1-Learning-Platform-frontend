import React, { useEffect, useState } from "react";
import FilterItems from "@/feature/teacher/utils/filter";
import Button from "@/shared/utils/button";
import InputField from "@/shared/utils/input";
import Dropdown from "@/feature/teacher/utils/DropDown";
import CoachingBatchCard from "@/feature/coaching/components/Coaching-Batch-Card";
import PaginationItems from "@/shared/utils/Pagination";
import MainLayout from "@/layout/Main-Layout";
import axios from "axios";

function BatchesPage() {
  const [allBatch, setAllBatch] = useState([]);

  // get all coaching centers
  useEffect(() => {
    (async () => {
      const batches = await axios.get(
        `/api/v1/allBatches?search=&limit=10&page=1&sortBy=updatedAt&sortType`,
        { withCredentials: true },
      );
      setAllBatch(batches.data.data);
    })();
  }, []);

  return (
    <MainLayout>
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
        {allBatch?.batch?.map((batch) => (
          <CoachingBatchCard
            image={batch?.coverImage}
            name={batch?.name}
            subjects={batch?.subjects}
            start={batch?.start_date}
            end={batch?.end_date}
            rating={"4.5"}
            batch={batch}
          />
        ))}
      </section>

      {/* -------------------------- Pagination --------------------- */}
      <section>
        <PaginationItems />
      </section>
    </MainLayout>
  );
}

export default BatchesPage;
