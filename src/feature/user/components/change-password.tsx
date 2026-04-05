import Button from "@/shared/utils/button";
import ErrorMsg from "@/shared/utils/error-msg";
import InputField from "@/shared/utils/input";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { resetPasswordAsyncThunk } from "../redux/resetPassword.thunk";
import { toast } from "sonner";
import type { AppDispatch } from "@/store/store";

interface ResetPassType {
  oldPassword: string;
  newPassword: string;
}

function ChangePassword() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });
  const dispatch = useDispatch<AppDispatch>()

  const saveData = async (data: ResetPassType) => {
    try {
      await dispatch(resetPasswordAsyncThunk(data)).unwrap()
      toast.success('Update Password')
      reset()

    } catch (error: any) {
      toast.error(error)
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(saveData)}>
        <section className="grid md:grid-cols-2 gap-3">
          <div>
            <Controller
              name="oldPassword"
              control={control}
              rules={{
                required: "old password are required !!!",
              }}
              render={({ field }) => (
                <InputField label="Old Password" {...field} />
              )}
            />
            {<ErrorMsg text={errors.oldPassword?.message} />}
          </div>
          <div>
            <Controller
              name="newPassword"
              control={control}
              rules={{
                required: "new password are required !!!",
              }}
              render={({ field }) => (
                <InputField label="New Password" {...field} />
              )}
            />
            {<ErrorMsg text={errors.newPassword?.message} />}
          </div>
        </section>
        <Button text={"Save"} className={"float-right mt-4"} />
      </form>
    </section>
  );
}

export default ChangePassword;
