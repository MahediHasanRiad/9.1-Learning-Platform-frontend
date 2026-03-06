import React from "react";
import EnrolledCard from "../../utils/Enrolled-card";

function EnrolledStudent() {
  return (
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
  );
}

export default EnrolledStudent;
