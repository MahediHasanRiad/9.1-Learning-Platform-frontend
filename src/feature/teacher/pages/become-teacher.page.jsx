import MainLayout from "@/layout/Main-Layout";
import Button from "@/shared/utils/button";
import CustomInput from "@/shared/utils/custom-input";
import InputField from "@/shared/utils/input";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { createTeacherAsyncThunk } from "../redux/createTeacher.thunk";
import { useNavigate } from "react-router";
import ErrorMsg from "@/shared/utils/error-msg";

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
      certificates: "",
    },
  });

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveData = async (data) => {
    try {
      const formData = new FormData();
      formData.append("userId", user._id);
      formData.append("education", data.education);
      formData.append("experience", data.experience);
      if (data.certificates) {
        Array.from(data.certificates).forEach((file) => {
          formData.append("certificates", file);
        });
      }

      // unwrap => convert in promise for proper working pending/fullfill/reject
      await dispatch(createTeacherAsyncThunk(formData)).unwrap();

      toast.success("Success");
      navigate("/teachers");
      reset();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <MainLayout>
      <section className="grid md:grid-cols-2 items-center justify-center mt-6">
        <div className="mx-auto">
          <img
            src="/public/form-fill.svg"
            className="bg-background-0 text-secondary-0"
            alt=""
          />
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
                  name="certificates"
                  control={control}
                  render={({ field: { onChange, value, ...field } }) => (
                    <CustomInput
                      type="file"
                      labelText={"Certificates"}
                      multiple={true}
                      label="Certificates"
                      {...field}
                      onChange={(e) => {
                        // convet in array
                        const files = Array.from(e.target.files);
                        onChange(files);
                      }}
                    />
                  )}
                />
                {<ErrorMsg text={errors.certificates?.message} />}
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
