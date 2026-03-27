import { Quote } from "lucide-react";
import UserInfo from "../components/user-info";
import MainLayout from "@/layout/Main-Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findUserByIdAsyncThunk } from "../redux/find-by-id.thunk";
import { useParams } from "react-router";
import { toast } from "sonner";
import type { AppDispatch, RootState } from "@/store/store";


function Profile() {

  const dispatch = useDispatch<AppDispatch>()
  const {id} = useParams()
  const {user} = useSelector((state: RootState) => state.user)

  useEffect(() => {
    ;(async () => {
      try {
        if(!id) return

        await dispatch(findUserByIdAsyncThunk(id)).unwrap()
      } catch (error: any) {
        toast.error(error)
      }
    })()
  }, [])

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
            <UserInfo user={user!} />
          </section>
        </section>
      </section>
    </MainLayout>
  );
}

export default Profile;
