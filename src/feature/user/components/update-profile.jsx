import Button from "@/shared/utils/button";
import InputField from "@/shared/utils/input";
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
      address: "",
      coverImage: "",
      avatar: "",
      bio: ""
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
            render={({ field }) => <InputField label="Name" placeholder="Mahedi Hasan Riad" {...field} />}
          />
          <Controller
            name="mobile"
            control={control}
            render={({ field }) => <InputField label="Mobile" placeholder="015**********" {...field} />}
          />
          <Controller
            name="address"
            control={control}
            render={({ field }) => <InputField label="Address" placeholder="mirpur 12, AJ avanue 56/A" {...field} />}
          />
          <Controller
            name="bio"
            control={control}
            render={({ field }) => (
              <InputField label="Bio" placeholder="what's on your mind 🤔" {...field} />
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
