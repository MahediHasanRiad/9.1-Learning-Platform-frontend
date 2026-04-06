import CoachingBatchCard from "@/feature/coaching/components/Coaching-Batch-Card";
import MainLayout from "@/layout/Main-Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { fetchEnrolledBatchThunk } from "../redux/enrolled.thunk";
import CoachingBatchCardSkeleton from "@/feature/coaching/components/skeleton/batches-card-skeleton";

function UserEnrolledBatch({}) {
  const dispatch = useDispatch<AppDispatch>();
  const { enrolled, loading } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchEnrolledBatchThunk());
  }, []);

  return (
    <MainLayout>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <CoachingBatchCardSkeleton key={i} />
            ))
          : enrolled?.enrolled_Batch?.map((e) => (
              <CoachingBatchCard
                image={e.batch.coverImage}
                name={e.batch.name}
                subjects={e.batch.subjects}
                start={e.batch.start_date}
                end={e.batch.end_date}
                btnText={"Details..."}
                batch={e.batch}
              />
            ))}
      </section>
    </MainLayout>
  );
}

export default UserEnrolledBatch;
