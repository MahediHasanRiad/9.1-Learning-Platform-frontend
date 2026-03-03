import Button from "@/shared/components/button";
import InputField from "@/shared/components/input";
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
            render={({ field: { onChange } }) => (
              <InputField
                label="Cover Image"
                type="file"
                // {...rest}
                onChange={(e) => onChange(e.target.files[0])}
              />
            )}
          />
          <Controller
            name="avatar"
            control={control}
            render={({ field: { onChange } }) => (
              <InputField
                label="Avatar"
                type="file"
                onChange={(e) => onChange(e.target.files[0])}
              />
            )}
          />
        </section>
        <Button text={"Save"} className={"float-right mt-4"} />
      </form>
    </section>
  );
}

export default UpdateProfile;
