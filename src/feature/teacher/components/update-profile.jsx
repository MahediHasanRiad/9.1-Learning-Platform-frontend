import Button from "@/shared/utils/button";
import CustomInput from "@/shared/utils/custom-input";
import InputField from "@/shared/utils/input";
import MultiSelect from "@/shared/utils/multi-select";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { items } from "./data";
import { dayOptions } from "./data";
import { timeOptions } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAsyncThunk } from "@/feature/user/redux/updateProfile.thunk";
import { updateTeacherProfileAsyncThunk } from "../redux/profileUpdate.thunk";
import { toast } from "sonner";
import { useParams } from "react-router";

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
      certificate: "",
      // expartIn: "",
      availableDay: "",
      availableTime: "",
      facebook: "",
      linkedIn: "",
      bio: "",
    },
  });

  const dispatch = useDispatch();
  const { id } = useParams();

  const saveData = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("address", data.address);
      formData.append("mobile", data.mobile);
      if (data.avatar?.[0]) formData.append("avatar", data.avatar[0]);
      if (data.coverImage?.[0])
        formData.append("coverImage", data.coverImage[0]);
      formData.append("bio", data.bio);
      formData.append("facebook", data.facebook);
      formData.append("linkedIn", data.linkedIn);
      formData.append("education", data.education);
      formData.append("experience", data.experience);
      if (data.certificate) {
        Array.from(data.certificate).forEach((file) =>
          formData.append("certificate", file),
        );
      }
      formData.append("availableDay", data.availableDay);
      formData.append("availableTime", data.availableTime);

      (await dispatch(
        updateTeacherProfileAsyncThunk({ id: id, formData }),
      ).unwrap(),
        toast.success("Successfully Updated"));
      reset();
    } catch (error) {
      toast.error(error);
    }
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
            name="certificate"
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <CustomInput
                type="file"
                labelText={"Certificate"}
                multiple={true}
                label="Certificate"
                {...field}
                onChange={(e) => {
                  // convet in array
                  const files = Array.from(e.target.files);
                  onChange(files);
                }}
              />
            )}
          />
          {/* <Controller
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
          /> */}
          <Controller
            name="availableDay"
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
            name="facebook"
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
            name="linkedIn"
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
