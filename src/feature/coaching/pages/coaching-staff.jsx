import MainLayout from "@/layout/Main-Layout";
import React from "react";
import StaffCard from "../components/staff-card";

function CoachingStaff() {
  return (
    <MainLayout>
      <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <StaffCard
          path="teacher/profile"
          img={"/public/riad.png"}
          name={"Mahedi Hasan Riad"}
          role={"Teacher"}
        />
      </section>
    </MainLayout>
  );
}

export default CoachingStaff;
