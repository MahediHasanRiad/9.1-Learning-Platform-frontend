import { useEffect, useState } from "react";
import CoachingBatchCard from "@/feature/coaching/components/Coaching-Batch-Card";
import PaginationItems from "@/shared/utils/Pagination";
import MainLayout from "@/layout/Main-Layout";
import FilterSection from "../components/Filter-section";
import type { QueryParamsType } from "@/feature/auth/auth-type";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { fetchAllBatchesThunk } from "@/feature/coaching/redux/fetch-all-batches.thunk";
import CoachingBatchCardSkeleton from "@/feature/coaching/components/skeleton/batches-card-skeleton";

function BatchesPage() {
  const [filterQuery, setFilterQuery] = useState<QueryParamsType>({
    search: "",
    sortType: "desc",
    page: 1,
    limit: 10,
  });

  const dispatch = useDispatch<AppDispatch>();
  const { batches, loading } = useSelector(
    (state: RootState) => state.coaching,
  );

  const handlePageChange = (newPage: number) => {
    setFilterQuery((prev) => ({ ...prev, page: newPage }));
  };

  useEffect(() => {
    dispatch(fetchAllBatchesThunk(filterQuery));
  }, [filterQuery]);

  return (
    <MainLayout>
      {/* ----------------------- Filter ---------------------- */}
      <section>
        <FilterSection setFilterQuery={setFilterQuery} />
      </section>

      {/* ------------------------------------ batches ----------------------------------- */}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-6 ">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <CoachingBatchCardSkeleton key={i} />
            ))
          : batches?.batches?.map((batch) => (
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
      {batches?.pagination && (
        <PaginationItems
          totalPage={batches?.pagination?.totalPage}
          currentPage={filterQuery?.page}
          onPageChange={handlePageChange}
        />
      )}
    </MainLayout>
  );
}

export default BatchesPage;
