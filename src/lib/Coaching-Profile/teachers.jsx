import TeacherInfo from "@/components/feature/Coaching-Profile/teacher-info";
import React from "react";

function Teachers() {
  return (
    <section className="space-y-5">
      <div>
        <h1 className="font-semibold text-3xl">Teachers</h1>
        <hr />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <TeacherInfo image={"/public/riad.png"} name={"Mahedi Hasan Riad"} />
        <TeacherInfo image={"/public/riad.png"} name={"Mahedi Hasan Riad"} />
        <TeacherInfo image={"/public/riad.png"} name={"Mahedi Hasan Riad"} />
        <TeacherInfo image={"/public/riad.png"} name={"Mahedi Hasan Riad"} />
        <TeacherInfo image={"/public/riad.png"} name={"Mahedi Hasan Riad"} />
        <TeacherInfo image={"/public/riad.png"} name={"Mahedi Hasan Riad"} />
        <TeacherInfo image={"/public/riad.png"} name={"Mahedi Hasan Riad"} />
        <TeacherInfo image={"/public/riad.png"} name={"Mahedi Hasan Riad"} />
        <TeacherInfo image={"/public/riad.png"} name={"Mahedi Hasan Riad"} />
        <TeacherInfo image={"/public/riad.png"} name={"Mahedi Hasan Riad"} />
      </div>
    </section>
  );
}

export default Teachers;
