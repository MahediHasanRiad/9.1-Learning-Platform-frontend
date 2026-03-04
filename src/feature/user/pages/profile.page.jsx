import Button from "@/shared/components/button";
import { Quote } from "lucide-react";
import React, { useState } from "react";
import UserInfo from "../components/user-info";
import TeacherInfo from "../components/teacher-info";
import CoachingInfo from "../components/coaching-info";
import MainLayout from "@/layout/Main-Layout";

function Profile() {
  const [user, setUser] = useState(false);
  const [teacher, setTeacher] = useState(true);
  const [coaching, setCoaching] = useState(false);

  return (
    <MainLayout>
      <section className="w-2/3 mx-auto">
        {/* cover-image  */}
        <section>
          <img
            src="/public/cover-image.jpg"
            alt="coverImage"
            className="w-full object-full rounded-md h-55"
          />
        </section>
        <section className="">
          {/* profile & bio  */}
          <section className="grid md:grid-cols-2">
            <div>
              <img
                src="/public/riad.png"
                alt="profile"
                className="rounded-full object-cover w-40 h-40 ring mt-4"
              />
              {coaching && (
                <h1 className="mt-2 text-2xl font-semibold">
                  Riad Coaching Center
                </h1>
              )}
            </div>
            <div className="p-6">
              <h4 className="text-sm my-6 italic w-4/5 md:w-2/3 mx-auto flex items-start justify-center gap-2 text-gray-600">
                <Quote size={16} className="text-secondary-0 shrink-0" />

                <span className="text-center">
                  The only way to do great work is to love what you do
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
            {user && <UserInfo />}
            {teacher && <TeacherInfo />}
            {coaching && <CoachingInfo />}
          </section>
        </section>
      </section>
    </MainLayout>
  );
}

export default Profile;
