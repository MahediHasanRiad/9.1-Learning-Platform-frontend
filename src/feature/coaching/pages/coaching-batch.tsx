import MainLayout from "@/layout/Main-Layout";
import { useEffect, useState } from "react";
import CoachingBatchCard from "../components/Coaching-Batch-Card";
import type { ShowBatchType } from "../coaching-type";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { AllBatchByCoachingThunk } from "../redux/allbatch.thunk";
import CoachingBatchCardSkeleton from "../components/skeleton/batches-card-skeleton";

function CoachingBatch() {
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const { batches, loading } = useSelector(
    (state: RootState) => state.coaching,
  );

  useEffect(() => {
    dispatch(AllBatchByCoachingThunk(id!));
  }, []);

  return (
    <MainLayout>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => <CoachingBatchCardSkeleton key={i} />)
        ) : (
          batches?.batches?.map((batch) => (
            <CoachingBatchCard
              key={batch?.id}
              path={batch?.id}
              image={batch?.coverImage}
              name={batch?.name}
              subjects={batch?.subjects}
              start={batch?.start_date}
              end={batch?.end_date}
              batch={batch}
            />
          ))
        )}
      </section>
    </MainLayout>
  );
}

export default CoachingBatch;
