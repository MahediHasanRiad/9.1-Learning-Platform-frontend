import React, { useEffect, useState } from "react";
import CoachingBatchCard from "@/feature/coaching/components/Coaching-Batch-Card";
import PaginationItems from "@/shared/utils/Pagination";
import MainLayout from "@/layout/Main-Layout";
import FilterSection from "../components/Filter-section";
import { api } from "@/API/api-client";

function BatchesPage() {
  const [allBatch, setAllBatch] = useState([]);
  const [filterQuery, setFilterQuery] = useState({
    search: "",
    sortType: "dec",
    sortBy: "updatedAt",
    page: 1,
    limit: 10,
  });

  const handlePageChange = (newPage) => {
    setFilterQuery((prev) => ({ ...prev, page: newPage }));
  };

  // get all coaching centers
  const fetchBatches = async (query) => {
    try {
      const { search, limit, page, sortBy, sortType } = query;
      const res = await api.get(
        `/api/v1/allBatches?search=${search}&limit=${limit}&page=${page}&sortBy=${sortBy}&sortType=${sortType}`,
        { withCredentials: true },
      );
      setAllBatch(res.data.data);
    } catch (error) {
      console.error("Error fetching batches:", error);
    }
  };
console.log('batch', allBatch)
  useEffect(() => {
    fetchBatches(filterQuery);
  }, [filterQuery]);

  return (
    <MainLayout>
      {/* ----------------------- Filter ---------------------- */}
      <section>
        <FilterSection filterChange={setFilterQuery} />
      </section>

      {/* ------------------------------------ batches ----------------------------------- */}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-6 ">
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
      {allBatch?.pagination && (
        <PaginationItems
          totalPage={allBatch?.pagination?.totalPage}
          currentPage={filterQuery?.page}
          onPageChange={handlePageChange}
        />
      )}
    </MainLayout>
  );
}

export default BatchesPage;
