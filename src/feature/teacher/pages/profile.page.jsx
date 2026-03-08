import TeacherInfo from "@/feature/teacher/components/teacher-info";
import MainLayout from "@/layout/Main-Layout";
import { Quote } from "lucide-react";
import { useSelector } from "react-redux";

function TeacherProfile() {

  const {teacher, user} = useSelector((state) => state.auth)
console.log('t', teacher)
console.log('u', user)
  return (
    <MainLayout>
      <section className="w-2/3 mx-auto">
        {/* cover-image  */}
        <section>
          <img
            src={user?.coverImage}
            alt="coverImage"
            className="w-full object-full rounded-md h-55"
          />
        </section>
        <section className="">
          {/* profile & bio  */}
          <section className="grid md:grid-cols-2">
            <div>
              <img
                src={user?.avatar}
                alt="profile"
                className="rounded-full object-cover w-40 h-40 ring mt-4"
              />
              
                {/* <h1 className="mt-2 text-2xl font-semibold">
                  Riad Coaching Center
                </h1> */}
              
            </div>
            <div className="p-6">
              <h4 className="text-sm my-6 italic w-4/5 md:w-2/3 mx-auto flex items-start justify-center gap-2 text-gray-600">
                <Quote size={16} className="text-secondary-0 shrink-0" />

                <span className="text-center">
                  {user?.bio}
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
            <TeacherInfo user={user} teacher={teacher} />
          </section>
        </section>
      </section>
    </MainLayout>
  );
}

export default TeacherProfile;
