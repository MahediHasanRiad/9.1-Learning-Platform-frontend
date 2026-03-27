import MainLayout from "@/layout/Main-Layout";
import { useEffect, useState } from "react";
import StaffCard from "../components/staff-card";
import { toast } from "sonner";
import { api } from "@/API/api-client";
import type { StaffType } from "../coaching-type";

interface CoachingStaff {
  links: string[];
  pagination: string[];
  staff: StaffType[];
}

function CoachingStaff() {
  const [staffs, setStaffs] = useState<CoachingStaff>();

  useEffect(() => {
    (async () => {
      try {
        // all staffs
        const staff = await api.get("/api/v1/coaching-staffs", {
          withCredentials: true,
        });
        setStaffs(staff.data.data);
      } 
      catch (error: any) {
        console.log(error);
        toast.error(error.message);
      }
    })();
  }, []);

  return (
    <MainLayout>
      <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {staffs?.staff?.map((staff) => (
          <StaffCard
            path={`/user/profile/${staff?.userId}`}
            img={staff?.avatar}
            name={staff?.name}
            role={staff?.role}
          />
        ))}
      </section>
    </MainLayout>
  );
}

export default CoachingStaff;
