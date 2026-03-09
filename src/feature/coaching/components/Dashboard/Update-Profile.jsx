import Button from "@/shared/utils/button";
import ErrorMsg from "@/shared/utils/error-msg";
import InputField from "@/shared/utils/input";
import Time from "@/shared/utils/time";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { updateCoachingProfileAsynkThunk } from "../../redux/updateCoachingProfile.thunk";
import { useParams } from "react-router";

function UpdateProfile() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      CcName: "",
      address: "",
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

  const dispatch = useDispatch()
  const {coaching} = useSelector((state) => state.auth)

  const saveData = async (data) => {
    try {
      // const formattedTime = data.officeTime?.map((t) => t.format("HH:mm"));

      const formData = new FormData();
      formData.append("CcName", data.CcName);
      formData.append("email", data.email);
      formData.append("address", data.address);
      formData.append("contact", data.contact);
      formData.append("bio", data.bio || "");
      formData.append("website", data.website || "");
      formData.append("linkedIn", data.linkedIn || "");
      formData.append("facebook", data.facebook || "");

      // if (formattedTime) {
        // formattedTime.forEach(time => formData.append("officeTime", time));
      // }
      if (data.avatar) formData.append("avatar", data.avatar);
      if (data.coverImage) formData.append("coverImage", data.coverImage);

      await dispatch(updateCoachingProfileAsynkThunk({
        id: coaching._id, 
        formData
      })).unwrap();

      reset();
      toast.success('Successfully Updated');

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
                placeholder="riad@gmail.com"
                readOnly
                {...field}
                className="border border-gray-300"
              />
            )}
          />
          <Controller
            name="CcName"
            control={control}
            render={({ field }) => (
              <InputField
                label="Name"
                placeholder="RST institute..."
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
