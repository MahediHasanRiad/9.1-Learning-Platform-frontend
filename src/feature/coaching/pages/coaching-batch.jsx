import MainLayout from "@/layout/Main-Layout";
import React, { useEffect, useState } from "react";
import CoachingBatchCard from "../components/Coaching-Batch-Card";
import axios from "axios";

function CoachingBatch() {
  const [allBatch, setAllBatch] = useState([]);

  useEffect(() => {
    (async () => {
      const allBatch = await axios.get(`/api/v1/allBatches`, {
        withCredentials: true,
      });
      setAllBatch(allBatch.data.data);
    })();
  }, []);

  return (
    <MainLayout>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {allBatch?.batch?.map((batch) => (
          <CoachingBatchCard
            key={batch._id}
            path={batch.Batch_link}
            image={batch.coverImage}
            name={batch.name}
            subjects={batch.subjects}
            start = {batch.start_date}
            end = {batch.end_date}
            batch = {batch}
          />
        ))}
      </section>
    </MainLayout>
  );
}

export default CoachingBatch;
