import { useEffect, useState } from "react";
import CoachingBatchCard from "@/feature/coaching/components/Coaching-Batch-Card";
import PaginationItems from "@/shared/utils/Pagination";
import MainLayout from "@/layout/Main-Layout";
import FilterSection from "../components/Filter-section";
import { api } from "@/API/api-client";
import type { QueryParamsType } from "@/feature/auth/auth-type";
import type { AllBatchType } from "@/feature/coaching/coaching-type";



function BatchesPage() {
  const [allBatch, setAllBatch] = useState<AllBatchType>();
  const [filterQuery, setFilterQuery] = useState<QueryParamsType>({
    search: "",
    sortType: "desc",
    page: 1,
    limit: 10,
  });

  const handlePageChange = (newPage: number) => {
    setFilterQuery((prev) => ({ ...prev, page: newPage }));
  };

  // get all coaching centers
  const fetchBatches = async (query: QueryParamsType) => {
    try {
      const { search, limit, page, sortType } = query;
      const res = await api.get(
        `/api/v1/all-batches?search=${search}&limit=${limit}&page=${page}&sortType=${sortType}`,
        // { withCredentials: true , params: { search, limit, page, sortType }},
        { withCredentials: true },
      );
      setAllBatch(res.data.data);
    } 
    catch (error) {
      console.error("Error fetching batches:", error);
    }
  };

  useEffect(() => {
    fetchBatches(filterQuery);
  }, [filterQuery]);

  return (
    <MainLayout>
      {/* ----------------------- Filter ---------------------- */}
      <section>
        <FilterSection setFilterQuery={setFilterQuery} />
      </section>

      {/* ------------------------------------ batches ----------------------------------- */}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-6 ">
        {allBatch?.batches?.map((batch) => (
          <CoachingBatchCard
            image={batch?.coverImage}
            name={batch?.name}
            subjects={batch?.subjects}
            start={batch?.start_date}
            end={batch?.end_date}
            btnText="view details..."
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
