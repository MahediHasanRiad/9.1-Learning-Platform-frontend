import TeacherInfo from "@/feature/teacher/components/teacher-info";
import MainLayout from "@/layout/Main-Layout";
import { Quote } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { SingleTeacherAsyncThunk } from "../redux/single-teacher.thunk";
import { toast } from "sonner";

function TeacherProfile() {
  // const { teacher, user } = useSelector((state) => state.auth);
  const { id } = useParams();

  const dispatch = useDispatch();
  const {user, loading, error} = useSelector((state) => state.teacher)

  useEffect(() => {
    ;(async () => {
      try {
        await dispatch(SingleTeacherAsyncThunk(id)).unwrap();
      } catch (error) {
        toast.error(error);
      }
    })();
  }, []);
console.log('teacer', user)
  return (
    <MainLayout>
      <section className="w-2/3 mx-auto">
        {/* cover-image  */}
        <section>
          <img
            src={user?.userId?.coverImage}
            alt="coverImage"
            className="w-full object-full rounded-md h-55"
          />
        </section>
        <section className="">
          {/* profile & bio  */}
          <section className="grid md:grid-cols-2">
            <div>
              <img
                src={user?.userId?.avatar}
                alt="profile"
                className="rounded-full object-cover w-40 h-40 ring mt-4"
              />
            </div>
            <div className="p-6">
              <h4 className="text-sm my-6 italic w-4/5 md:w-2/3 mx-auto flex items-start justify-center gap-2 text-gray-600">
                <Quote size={16} className="text-secondary-0 shrink-0" />

                <span className="text-center">{user?.userId?.bio}</span>

                <Quote
                  size={16}
                  className="text-secondary-0 shrink-0 rotate-180 "
                />
              </h4>
            </div>
          </section>
          {/* info  */}
          <section className="mt-4">
            <TeacherInfo user={user}/>
          </section>
        </section>
      </section>
    </MainLayout>
  );
}

export default TeacherProfile;
