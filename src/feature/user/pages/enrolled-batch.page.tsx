import CoachingBatchCard from "@/feature/coaching/components/Coaching-Batch-Card";
import MainLayout from "@/layout/Main-Layout";
import axios from "axios";
import { useEffect, useState } from "react";

function UserEnrolledBatch({}) {
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    const getBatch = async () => {
      const response = await axios.get("/api/v1/user/all-enrolled", {
        withCredentials: true,
      });
      setEnrolled(response.data.data);
    };

    getBatch();
  }, []);


  return (
    <MainLayout>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {/* <CoachingBatchCard
          image={"/public/cover-image.jpg"}
          name={"Batch Alfa new"}
          subjects={[{_id: '1', name: 'Math', className: 'Class 10'}]}
          start={"12-02-2026"}
          end={"16-08-2026"}
          btnText={'Details...'}
          batch={}
        /> */}
      </section>
    </MainLayout>
  );
}

export default UserEnrolledBatch;
