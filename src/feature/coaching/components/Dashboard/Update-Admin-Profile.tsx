import Button from "@/shared/utils/button";
import ErrorMsg from "@/shared/utils/error-msg";
import InputField from "@/shared/utils/input";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import type { AdminType } from "../../coaching-type";

function UpdateAdminProfile() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      contact: "",
      linkedIn: "",
      facebook: "",
    },
  });

  const saveData: SubmitHandler<AdminType> = (data) => {
    console.log(data);
  };

  return (
    <>
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
          <div>
            <Controller
              name="contact"
              control={control}
              rules={{
                pattern: {
                  value: /^01[3-9]\d{8}$/,
                  message: "must use 11 digit number",
                },
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
    </>
  );
}

export default UpdateAdminProfile;
