import Button from "@/shared/components/button";
import CustomInput from "@/shared/components/custom-input";
import ErrorMsg from "@/shared/components/error-msg";
import InputField from "@/shared/components/input";
import MultiSelectField from "@/shared/components/multi-select";
import MultiSelect from "@/shared/components/multi-select";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const dayOptions = [
  { value: "sat", label: "Saturday" },
  { value: "sun", label: "Sunday" },
  { value: "mon", label: "Monday" },
  { value: "tue", label: "Tuesday" },
  { value: "wed", label: "Wednesday" },
  { value: "thu", label: "Thursday" },
  { value: "fri", label: "Friday" },
];
const timeOptions = [
  { value: "6am-7am", label: "6am - 7am" },
  { value: "7am-8am", label: "7am - 8am" },
  { value: "8am-9am", label: "8am - 9am" },
  { value: "9am-10am", label: "9am - 10am" },
  { value: "10am-11am", label: "10am - 11am" },
  { value: "11am-12pm", label: "11am - 12pm" },
  { value: "12pm-1pm", label: "12pm - 1pm" },
  { value: "1pm-2pm", label: "1pm - 2pm" },
  { value: "2pm-3pm", label: "2pm - 3pm" },
  { value: "3pm-4pm", label: "3pm - 4pm" },
  { value: "4pm-5pm", label: "4pm - 5pm" },
  { value: "5pm-6pm", label: "5pm - 6pm" },
  { value: "6pm-7pm", label: "6pm - 7pm" },
  { value: "7pm-8pm", label: "7pm - 8pm" },
  { value: "8pm-9pm", label: "8pm - 9pm" },
  { value: "9pm-10pm", label: "9pm - 10pm" },
  { value: "10pm-11pm", label: "10pm - 11pm" },
  { value: "11pm-12am", label: "11pm - 12am" }
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
      experience: "",
      certificates: "",
      availableDay: "",
      availableTime: "",
      facebookLink: "",
      linkedInLink: "",
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
            render={({ field }) => <InputField label="Name" placeholder="Md. Riad." {...field} />}
          />
          <Controller
            name="address"
            control={control}
            render={({ field }) => <InputField label="Address" placeholder="mirpur 10, JC block/D" {...field} />}
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
            render={({ field }) => <InputField label="Mobile" placeholder="015*********" {...field} />}
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
            name="experienceOfYears"
            control={control}
            render={({ field }) => (
              <InputField label="Experience" placeholder="6 years of experience in IT" {...field} />
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
            name="availableDays"
            control={control}
            render={({ field }) => (
              <MultiSelectField
                label="Available Days"
                options={dayOptions}
                placeholder="Select days..."
                {...field}
              />
            )}
          />
          <Controller
            name="availableTime"
            control={control}
            render={({ field }) => (
              <MultiSelectField
                label="Available Times"
                options={timeOptions}
                placeholder="Select Free Time..."
                {...field}
              />
            )}
          />
          <Controller
            name="facebookLink"
            control={control}
            render={({ field }) => (
              <InputField label="Facebook Profile" placeholder="https://..."{...field} />
            )}
          />
          <Controller
            name="linkedInLink"
            control={control}
            render={({ field }) => (
              <InputField label="LinkedIn Profile" placeholder="https://..."{...field} />
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
