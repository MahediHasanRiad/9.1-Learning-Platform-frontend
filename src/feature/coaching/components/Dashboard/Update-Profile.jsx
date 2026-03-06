import Button from "@/shared/utils/button";
import ErrorMsg from "@/shared/utils/error-msg";
import InputField from "@/shared/utils/input";
import Time from "@/shared/utils/time";
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
      email: "",
      name: "",
      address: "",
      city: "",
      country: "",
      contact: "",
      avatar: "",
      coverImage: "",
      bio: "",
      officeTime: "",
      website: "",
      linkedIn: "",
      facebook: "",
    },
  });

  const saveData = (data) => {
    const formatted = data.officeTime?.map((t) => t.format("HH:mm"));

    const finalData = {
      ...data,
      officeTime: formatted,
    };

    console.log(finalData);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(saveData)}>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputField
                label="Email"
                placeholder="riad@gmail.com"
                readOnly
                {...field}
                className="border border-gray-300"
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputField
                label="Name"
                placeholder="mahedi hasan riad"
                {...field}
              />
            )}
          />
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <InputField
                label="Address"
                placeholder="mirpur 10, JB/156B.."
                {...field}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <InputField label="City" placeholder="Dhaka" {...field} />
            )}
          />
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <InputField label="Country" placeholder="Bangladesh" {...field} />
            )}
          />
          <div>
            <Controller
            name="contact"
            control={control}
            rules={{
              pattern: {
                value: /^01[3-9]\d{8}$/,
                message: 'must use 11 digit number'
              }
            }}
            render={({ field }) => (
              <InputField
                label="Contact"
                placeholder="015**********"
                {...field}
              />
            )}
          />
          {<ErrorMsg text={errors.contact?.message} />}
          </div>
          <Controller
            name="avatar"
            control={control}
            render={({ field: { onChange } }) => (
              <InputField
                label="Profile Image"
                type="file"
                onChange={(e) => onChange(e.target.files[0])}
              />
            )}
          />
          <Controller
            name="coverImage"
            control={control}
            render={({ field: { onChange } }) => (
              <InputField
                label="Cover Image"
                type="file"
                onChange={(e) => onChange(e.target.files[0])}
              />
            )}
          />
          <Controller
            name="bio"
            control={control}
            render={({ field }) => (
              <InputField
                label="Bio"
                placeholder="what's on your mind 🤔"
                {...field}
              />
            )}
          />
          <Controller
            name="officeTime"
            control={control}
            render={({ field }) => (
              <Time
                type="double"
                label="Office Time"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            name="website"
            control={control}
            render={({ field }) => (
              <InputField
                label="Website"
                placeholder="https://mhriad.com"
                {...field}
              />
            )}
          />
          <Controller
            name="linkedIn"
            control={control}
            render={({ field }) => (
              <InputField
                label="LinkedIn"
                placeholder="https://mhriad.com"
                {...field}
              />
            )}
          />
          <Controller
            name="facebook"
            control={control}
            render={({ field }) => (
              <InputField
                label="Facebook"
                placeholder="https://mhriad.com"
                {...field}
              />
            )}
          />
        </section>

        {/* submit btn  */}
        <Button text={"Save"} className={"float-right mt-10"} />
      </form>
    </section>
  );
}

export default UpdateProfile;
