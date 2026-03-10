import MainLayout from "@/layout/Main-Layout";
import React, { useEffect, useState } from "react";
import StaffCard from "../components/staff-card";
import axios from "axios";
import { toast } from "sonner";

function CoachingStaff() {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // all staffs
        const staff = await axios.get("/api/v1/coaching-all-staff", {
          withCredentials: true,
        });
        setStaffs(staff.data.data);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    })();
  }, []);

  return (
    <MainLayout>
      <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {staffs?.map((staff) => (
          <StaffCard
            path={`/user/profile/${staff?.staffId?._id}`}
            img={staff?.staffId?.avatar}
            name={staff?.staffId?.name}
            role={staff?.role}
          />
        ))}
      </section>
    </MainLayout>
  );
}

export default CoachingStaff;
