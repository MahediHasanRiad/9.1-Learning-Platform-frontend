import Button from "@/shared/utils/button";
import CustomInput from "@/shared/utils/custom-input";
import InputField from "@/shared/utils/input";
import MultiSelect from "@/shared/utils/multi-select";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const items = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

const dayOptions = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
const timeOptions = [
  "6am - 7am",
  "7am - 8am",
  "8am - 9am",
  "9am - 10am",
  "10am - 11am",
  "11am - 12pm",
  "12pm - 1pm",
  "1pm - 2pm",
  "2pm - 3pm",
  "3pm - 4pm",
  "4pm - 5pm",
  "5pm - 6pm",
  "6pm - 7pm",
  "7pm - 8pm",
  "8pm - 9pm",
  "9pm - 10pm",
  "10pm - 11pm",
  "11pm - 12am",
];

function UpdateProfile() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      address: "",
      mobile: "",
      avatar: "",
      coverImage: "",
      education: "",
      experience: "",
      certificates: "",
      expartIn: "",
      availableDay: "",
      availableTime: "",
      facebookLink: "",
      linkedInLink: "",
      bio: "",
    },
  });

  const saveData = (data) => {
    console.log(data);
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
                readOnly
                placeholder="riad@gmail.com"
                className="border-gray-200"
                {...field}
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputField label="Name" placeholder="Md. Riad." {...field} />
            )}
          />
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <InputField
                label="Address"
                placeholder="mirpur 10, JC block/D"
                {...field}
              />
            )}
          />
          <Controller
            name="mobile"
            control={control}
            rules={{
              pattern: {
                value: /^(?:\+88|88)?(01[3-9]\d{8})$/,
                message: "Must Add 88 - before number.",
              },
            }}
            render={({ field }) => (
              <InputField
                label="Mobile"
                placeholder="015*********"
                {...field}
              />
            )}
          />
          <Controller
            name="avatar"
            control={control}
            render={({ field: { onChange } }) => (
              <InputField
                type="file"
                label="Profile Picture"
                onChange={(e) => onChange(e.target.files[0])}
              />
            )}
          />
          <Controller
            name="coverImage"
            control={control}
            render={({ field: { onChange } }) => (
              <InputField
                type="file"
                label="Cover Image"
                onChange={(e) => onChange(e.target.files[0])}
              />
            )}
          />
          <Controller
            name="education"
            control={control}
            render={({ field }) => (
              <InputField
                label="Education"
                placeholder="BSc in Computer Science at BRACK"
                {...field}
              />
            )}
          />
          <Controller
            name="experienceOfYears"
            control={control}
            render={({ field }) => (
              <InputField
                label="Experience"
                placeholder="6 years of experience in IT"
                {...field}
              />
            )}
          />
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
          <Controller
            name="expartIn"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <MultiSelect
                label="Expart In"
                items={items}
                placeholder="Subjects..."
                {...field}
              />
            )}
          />
          <Controller
            name="availableDays"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <MultiSelect
                label="Available Days"
                items={dayOptions}
                placeholder="Select days..."
                {...field}
              />
            )}
          />
          <Controller
            name="availableTime"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <MultiSelect
                label="Available Times"
                items={timeOptions}
                placeholder="Select Free Time..."
                {...field}
              />
            )}
          />
          <Controller
            name="facebookLink"
            control={control}
            render={({ field }) => (
              <InputField
                label="Facebook Profile"
                placeholder="https://..."
                {...field}
              />
            )}
          />
          <Controller
            name="linkedInLink"
            control={control}
            render={({ field }) => (
              <InputField
                label="LinkedIn Profile"
                placeholder="https://..."
                {...field}
              />
            )}
          />
          <Controller
            name="bio"
            control={control}
            render={({ field }) => (
              <InputField
                label="Bio.."
                placeholder="what's on your mind 🤔"
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
