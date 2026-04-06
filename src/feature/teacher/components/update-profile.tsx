import Button from "@/shared/utils/button";
import CustomInput from "@/shared/utils/custom-input";
import InputField from "@/shared/utils/input";
import MultiSelect from "@/shared/utils/multi-select";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { dayOptions, timeOptions } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { updateTeacherProfileAsyncThunk } from "../redux/profileUpdate.thunk";
import { toast } from "sonner";
import { useParams } from "react-router";
import type { AppDispatch, RootState } from "@/store/store";
import type { UpdateTeacherProfileType } from "../teacher-type";

function UpdateProfile() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      address: "",
      mobile: "",
      avatar: "",
      coverImage: "",
      education: "",
      experience: "",
      certificate: "",
      availableDay: [],
      availableTime: [],
      facebook: "",
      linkedIn: "",
      bio: "",
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const { id } = useParams();

  const saveData: SubmitHandler<UpdateTeacherProfileType> = async (data) => {
  try {

    if (!user?.id) throw new Error("User ID missing");
    const formData = new FormData();

    if (data.name) formData.append("name", data.name);
    if (data.address) formData.append("address", data.address);
    if (data.mobile) formData.append("mobile", data.mobile);
    if (data.bio) formData.append("bio", data.bio);
    if (data.facebook) formData.append("facebook", data.facebook);
    if (data.linkedIn) formData.append("linkedIn", data.linkedIn);

    if (data.avatar) {
      formData.append("avatar", data.avatar);
    }

    if (data.coverImage) {
      formData.append("coverImage", data.coverImage);
    }

    if (data.subjects?.length) {
      data.subjects.forEach((sub) => {
        formData.append("subjects", sub);
      });
    }

    if (data.availableDay?.length) {
      data.availableDay.forEach((day) => {
        formData.append("availableDay", day);
      });
    }

    if (data.availableTime?.length) {
      data.availableTime.forEach((time) => {
        formData.append("availableTime", time);
      });
    }

    await dispatch(
      updateTeacherProfileAsyncThunk({
        id,
        formData,
      })
    ).unwrap();

    reset();
    toast.success("Profile Updated!");
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("Update failed");
    }
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
                onChange={(e) => onChange(e.target.files?.[0])}
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
                onChange={(e) => onChange(e.target.files?.[0])}
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
            name="certificate"
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <CustomInput
                type="file"
                labelText={"Certificate"}
                multiple={true}
                {...field}
                onChange={(e) => {
                  // convet in array
                  // const files = Array.from(e.target.files);
                  onChange(e.target.files?.[0]);
                }}
              />
            )}
          />
          <Controller
            name="availableDay"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <MultiSelect
                label="Available Days"
                items={dayOptions}
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
