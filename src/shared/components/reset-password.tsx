import type { ResetPassType } from "@/feature/teacher/teacher-type";
import Button from "@/shared/utils/button";
import ErrorMsg from "@/shared/utils/error-msg";
import InputField from "@/shared/utils/input";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";

function ResetPassword() {

  const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      defaultValues: {
        oldpassword: "",
        newpassword: "",
      },
    });
  
    const saveData: SubmitHandler<ResetPassType> = (data) => {
      console.log(data)
    }


  return (
     <>
      <form onSubmit={handleSubmit(saveData)}>
        <section className="grid md:grid-cols-2 gap-4">
          <div>
            <Controller
              name="oldpassword"
              control={control}
              rules={{
                required: "Old Password are required !",
              }}
              render={({ field }) => (
                <InputField label="Old Password" placeholder="*****" {...field} />
              )}
            />
            {<ErrorMsg text={errors.oldpassword?.message} />}
          </div>
          <div>
            <Controller
              name="newpassword"
              control={control}
              rules={{
                required: "New Password are required !",
              }}
              render={({ field }) => (
                <InputField label="New Password" placeholder="*****" {...field} />
              )}
            />
            {<ErrorMsg text={errors.newpassword?.message} />}
          </div>
        </section>

        {/* submit btn  */}
        <Button text={"Reset"} className={"float-right mt-10"} />
      </form>
    </>
  )
}

export default ResetPassword
