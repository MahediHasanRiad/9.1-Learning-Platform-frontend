import MainLayout from "@/layout/Main-Layout";
import { Quote } from "lucide-react";
import React from "react";

function About() {
  return (
    <MainLayout>
      <section className="w-2/3 mx-auto ">
      {/* part 1 */}
        <section className="grid md:grid-cols-2 items-center my-16">
          <div className="">
            <img src="/public/best-tutor.svg" alt="" className="w-60" />
          </div>
          <div>
            <p className="italic">
              Choosing the right teacher shouldn’t <br /> be based on guesswork.
            </p>
          </div>
        </section>
        {/* part 2  */}
        <section className="grid md:grid-cols-2 items-center my-16">
          <div className="md:hidden">
            <img
              src="/public/find-teacher.svg"
              alt=""
              className="w-60 float-right"
            />
          </div>
          <div>
            <p className="italic p-4">
              Our platform helps guardians discover the best tutors and coaching
              centers by watching real demo classes, exploring teacher profiles,
              and comparing teaching quality before making a decision.
            </p>
          </div>
          <div className="hidden md:block">
            <img
              src="/public/find-teacher.svg"
              alt=""
              className="w-60 float-right"
            />
          </div>
        </section>
        {/* part 3  */}
        <section className="grid md:grid-cols-2 items-center my-16">
          <div className="">
            <img src="/public/showcase-project.svg" alt="" className="w-60" />
          </div>
          <div>
            <p className="italic p-4">
              Tutors and coaching centers can showcase their skills, experience,
              and teaching style, while guardians can make informed choices for
              their children’s education.
            </p>
          </div>
        </section>
        {/* part 4  */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-4 my-30 px-4 text-center">
          <Quote className="text-primary w-8 h-8 self-start md:self-auto" />

          <span className="text-xl md:text-2xl font-medium text-gray-700 max-w-2xl leading-relaxed">
            We believe education should be{" "}
            <i className="text-primary-0 not-italic font-bold">transparent</i>,
            <i className="text-primary-0 not-italic font-bold"> accessible</i>,
            and based on real{" "}
            <i className="text-primary-0 not-italic font-bold">
              teaching quality
            </i>
            .
          </span>

          <Quote className="text-primary w-8 h-8 rotate-180 self-end md:self-auto" />
        </section>
      </section>
    </MainLayout>
  );
}

export default About;
