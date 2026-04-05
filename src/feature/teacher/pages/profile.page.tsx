import TeacherInfo from "@/feature/teacher/components/teacher-info";
import MainLayout from "@/layout/Main-Layout";
import { Quote } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { SingleTeacherAsyncThunk } from "../redux/single-teacher.thunk";
import { toast } from "sonner";
import type { AppDispatch, RootState } from "@/store/store";
import type { TeacherSliceType } from "../teacher-type";
import ErrorMsg from "@/shared/utils/error-msg";

interface TeacherProfileType {
  user: TeacherSliceType;
  loading: boolean;
  error: any;
}

function TeacherProfile() {
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const {user, loading, error} = useSelector((state: RootState) => state.teacher as TeacherProfileType)

  useEffect(() => {
    ;(async () => {
      try {
        if(!id) return 
        await dispatch(SingleTeacherAsyncThunk(id)).unwrap();
      } catch (error: any) {
        toast.error(error);
      }
    })();
  }, []);

  return (
    <MainLayout>
      {error && <ErrorMsg text={error} />}
      {loading && <h1>Loading...</h1>}

      <section className="md:w-2/3 mx-auto">
        {/* cover-image  */}
        <section>
          <img
            src={user?.user?.coverImage}
            alt="coverImage"
            className="w-full object-full rounded-md h-55"
          />
        </section>
        <section className="">
          {/* profile & bio  */}
          <section className="grid md:grid-cols-2">
            <div>
              <img
                src={user?.user?.avatar}
                alt="profile"
                className="rounded-full object-cover w-40 h-40 ring mt-4"
              />
            </div>
            <div className="p-6">
              <h4 className="text-sm my-6 italic w-4/5 md:w-2/3 mx-auto flex items-start justify-center gap-2 text-gray-600">
                <Quote size={16} className="text-secondary-0 shrink-0" />

                <span className="text-center">{user?.user?.bio}</span>

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
