import React from "react";
import MainLayout from "@/layout/Main-Layout";
import CoachingInfo from "@/feature/user/components/coaching-info";
import { Quote } from "lucide-react";
import { useSelector } from "react-redux";



function CoachingProfile() {

  const {coaching} = useSelector((state) => state.auth)

  return (
   <MainLayout>
      <section className="w-2/3 mx-auto">
        {/* cover-image  */}
        <section>
          <img
            src={coaching?.coverImage}
            alt="coverImage"
            className="w-full object-full rounded-md h-55"
          />
        </section>
        <section className="">
          {/* profile & bio  */}
          <section className="grid md:grid-cols-2">
            <div>
              <img
                src={coaching?.avatar}
                alt="profile"
                className="rounded-full object-cover w-40 h-40 ring mt-4"
              />
              
                <h1 className="mt-2 text-2xl font-semibold">
                  {coaching?.CcName}
                </h1>
              
            </div>
            <div className="p-6">
              <h4 className="text-sm my-6 italic w-4/5 md:w-2/3 mx-auto flex items-start justify-center gap-2 text-gray-600">
                <Quote size={16} className="text-secondary-0 shrink-0" />

                <span className="text-center">
                  {coaching?.bio}
                </span>

                <Quote
                  size={16}
                  className="text-secondary-0 shrink-0 rotate-180 "
                />
              </h4>
            </div>
          </section>
          {/* info  */}
          <section className="mt-4">
            <CoachingInfo coaching = {coaching} />
          </section>
        </section>
      </section>
    </MainLayout>
  );
}

export default CoachingProfile;
