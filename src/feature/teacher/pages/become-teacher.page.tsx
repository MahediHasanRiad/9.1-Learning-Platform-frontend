import MainLayout from "@/layout/Main-Layout";
import Button from "@/shared/utils/button";
import CustomInput from "@/shared/utils/custom-input";
import InputField from "@/shared/utils/input";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { createTeacherAsyncThunk } from "../redux/createTeacher.thunk";
import { useNavigate } from "react-router";
import ErrorMsg from "@/shared/utils/error-msg";
import type { AppDispatch, RootState } from "@/store/store";
import type { TeacherType } from "../teacher-type";
import img from "../../../../public/images/form-fill.svg";


function BecomeATeacher() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      education: "",
      experience: "",
      certificate: "",
    },
  });

  const { user, teacher } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const saveData = async (data: TeacherType) => {
    try {
      const formData = new FormData();
      if (user?.id) {
        formData.append("userId", user?.id);
      }
      formData.append("education", data.education);
      formData.append("experience", data.experience);
      if (data.certificate) {
        formData.append("certificate", data.certificate);
      }

      // unwrap => convert in promise for proper working pending/fullfill/reject
      await dispatch(createTeacherAsyncThunk(formData)).unwrap();

      toast.success("Success");
      navigate("/teachers");
      reset();
    } 
    catch (error: any) {
      console.log(error)
      toast.error(error);
    }
  };



  return (
    <MainLayout>
      <section className="grid md:grid-cols-2 items-center justify-center mt-6">
        <div className="mx-auto">
          <img src={img} className="bg-background-0 text-secondary-0" alt="" />
        </div>
        <div className="">
          <form onSubmit={handleSubmit(saveData)}>
            <section className="md:w-2/4 mx-auto space-y-4">
              <div>
                <Controller
                  name="education"
                  rules={{
                    required: "Education field are required !!!",
                  }}
                  control={control}
                  render={({ field }) => (
                    <InputField
                      label="Education *"
                      placeholder="BSc in Computer Science at BRACK"
                      {...field}
                    />
                  )}
                />
                {<ErrorMsg text={errors.education?.message} />}
              </div>
              <div>
                <Controller
                  name="experience"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      label="Experience"
                      placeholder="6 years of experience in IT"
                      {...field}
                    />
                  )}
                />
                {<ErrorMsg text={errors.experience?.message} />}
              </div>
              <div>
                <Controller
                  name="certificate"
                  control={control}
                  render={({ field: { onChange, value, ...field } }) => (
                    <CustomInput
                      type="file"
                      labelText={"Certificate"}
                      // multiple={true}
                      {...field}
                      onChange={(e) => {
                        // convet in array
                        // const files = Array.from(e.target.files);
                        onChange(e.target.files);
                      }}
                    />
                  )}
                />
                {<ErrorMsg text={errors.certificate?.message} />}
              </div>
              {/* submit btn  */}
              <Button text={"Create"} className={"w-full mt-5"} />
            </section>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}

export default BecomeATeacher;
