import React from "react";
import EnrolledCard from "../../utils/Enrolled-card";
import MainLayout from "@/layout/Main-Layout";

function EnrolledStudent() {
  return (
    <MainLayout>
      <section className="space-y-4">
        <EnrolledCard
          path={"coaching/enrolled/1"}
          batchName={"Alfa new 1"}
          duration={"12-Mar-26 to 15-aug-26"}
          status={"running"}
        />
        <EnrolledCard
          path={"coaching/enrolled/1"}
          batchName={"Alfa new 1"}
          duration={"12-Mar-26 to 15-aug-26"}
          status={"completed"}
        />
      </section>
    </MainLayout>
  );
}

export default EnrolledStudent;
