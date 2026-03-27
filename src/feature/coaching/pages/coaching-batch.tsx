import MainLayout from "@/layout/Main-Layout";
import { useEffect, useState } from "react";
import CoachingBatchCard from "../components/Coaching-Batch-Card";
import type { ShowBatchType } from "../coaching-type";
import { useParams } from "react-router";
import { api } from "@/API/api-client";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

interface Batch {
  links: string[];
  pagination: string[];
  batch: ShowBatchType[];
}

function CoachingBatch() {
  const [allBatch, setAllBatch] = useState<Batch>();
  const {id} = useParams()

  const {loading, error} = useSelector((state: RootState) => state.coaching)

  useEffect(() => {
    ;(async () => {
      try {
        const allBatch = await api.get(`/api/v1/all-batch-in-coaching/${id}`, {
          withCredentials: true,
        });
        console.log('aa', allBatch.data.data)
        setAllBatch(allBatch.data.data);
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);

  return (
    <MainLayout>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading && <h1>Loading...</h1>}
        {allBatch?.batch?.map((batch) => (
          <CoachingBatchCard
            key={batch?._id}
            path={batch?._id}
            image={batch?.coverImage}
            name={batch?.name}
            subjects={batch?.subjects}
            start = {batch?.start_date}
            end = {batch?.end_date}
            batch = {batch}
          />
        ))}
      </section>
    </MainLayout>
  );
}

export default CoachingBatch;
