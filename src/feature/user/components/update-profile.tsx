import Button from "@/shared/utils/button";
import InputField from "@/shared/utils/input";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { updateProfileAsyncThunk } from "../redux/updateProfile.thunk";
import type { AppDispatch, RootState } from "@/store/store";
import type { UserType } from "../user-type";

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
      bio: "",
      facebook: "",
      linkedIn: ""
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const { loading } = useSelector((state: RootState) => state.user);

  const saveData = async (data: Partial<UserType>) => {
    try {
      const formData = new FormData();
      if(data.name) formData.append("name", data.name);
      if(data.mobile) formData.append("mobile", data.mobile);
      if(data.address) formData.append("address", data.address);
      if(data.bio) formData.append("bio", data.bio);
      if(data.facebook) formData.append("facebook", data.facebook);
      if(data.linkedIn) formData.append("linkedIn", data.linkedIn);

      if (data.coverImage)
        formData.append("coverImage", data.coverImage);
      if (data.avatar) formData.append("avatar", data.avatar);

      await dispatch(updateProfileAsyncThunk({ id: user?.id, formData }))
        .unwrap()
        .then(() => {
          reset();
          toast.success("Profile Updated Successfully!");
        });
    } catch (error: any) {
      toast.error(typeof error === "string" ? error : error.message);
    }
  };
  return (
    <section>
      <form onSubmit={handleSubmit(saveData)}>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputField
                label="Name"
                placeholder="Mahedi Hasan Riad"
                {...field}
              />
            )}
          />
          <Controller
            name="mobile"
            control={control}
            render={({ field }) => (
              <InputField
                label="Mobile"
                placeholder="015**********"
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
                placeholder="mirpur 12, AJ avanue 56/A"
                {...field}
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
            name="coverImage"
            control={control}
            render={({ field: { onChange } }) => (
              <InputField
                label="Cover Image"
                type="file"
                // {...rest}
                onChange={(e) => onChange(e.target.files?.[0])}
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
                onChange={(e) => onChange(e.target.files?.[0])}
              />
            )}
          />
          <Controller
            name="facebook"
            control={control}
            render={({ field }) => (
              <InputField
                label="Facebook"
                placeholder="https://www.facebook.com"
                {...field}
              />
            )}
          /><Controller
            name="linkedIn"
            control={control}
            render={({ field }) => (
              <InputField
                label="LinkedIn"
                placeholder="https://www.linkedIn.com"
                {...field}
              />
            )}
          />
        </section>
        <Button text={loading ? 'Loading...' : "Save"} className={"float-right mt-4"} />
      </form>
    </section>
  );
}

export default UpdateProfile;
