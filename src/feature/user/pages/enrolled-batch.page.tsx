import { api } from "@/API/api-client";
import type { QueryParamsType } from "@/feature/auth/auth-type";
import CoachingBatchCard from "@/feature/coaching/components/Coaching-Batch-Card";
import MainLayout from "@/layout/Main-Layout";
import { useEffect, useState } from "react";
import type { EnrolledBatchType } from "../user-type";

interface EnrolledType {
  enrolled_Batch: EnrolledBatchType[];
  pagination: Partial<QueryParamsType>;
  links: {
    self: string;
  };
}

function UserEnrolledBatch({}) {
  const [enrolled, setEnrolled] = useState<EnrolledType>();

  useEffect(() => {
    const getBatch = async () => {
      const response = await api.get("/api/v1/user/all-enrolled", {
        withCredentials: true,
      });
      setEnrolled(response.data.data);
    };

    getBatch();
  }, []);


  return (
    <MainLayout>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {enrolled?.enrolled_Batch?.map(e => (
          <CoachingBatchCard
          image={e.batch.coverImage}
          name={e.batch.name}
          subjects={[{_id: '1', name: 'Math', className: 'Class 10'}]}
          start={e.batch.start_date}
          end={e.batch.end_date}
          btnText={'Details...'}
          batch={e.batch}
        /> 
        ))}
      </section>
    </MainLayout>
  );
}

export default UserEnrolledBatch;
