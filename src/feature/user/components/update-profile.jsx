import Button from "@/feature/teacher/utils/button";
import InputField from "@/feature/teacher/utils/input";
import ErrorMsg from "@/shared/components/error-msg";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function UpdateProfile() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      class: "",
      subjectOfInterest: "",
      coverImage: "",
      avatar: "",
    },
  });

  const saveData = (data) => {
    console.log(data);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(saveData)}>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Controller
            name="name"
            control={control}
            render={({ field }) => <InputField label="Name" {...field} />}
          />
          <Controller
            name="mobile"
            control={control}
            render={({ field }) => <InputField label="Mobile" {...field} />}
          />
          <Controller
            name="class"
            control={control}
            render={({ field }) => <InputField label="Class" {...field} />}
          />
          <Controller
            name="subjectOfInterest"
            control={control}
            render={({ field }) => (
              <InputField label="Subject Of Interest" {...field} />
            )}
          />
          <Controller
            name="coverImage"
            control={control}
            render={({ field }) => (
              <InputField label="Cover Image" type="file" {...field} />
            )}
          />
          <Controller
            name="avatar"
            control={control}
            render={({ field }) => (
              <InputField label="Avatar" type="file" {...field} />
            )}
          />
        </section>
        <Button text={"Save"} className={"float-right mt-4"} />
      </form>
    </section>
  );
}

export default UpdateProfile;
