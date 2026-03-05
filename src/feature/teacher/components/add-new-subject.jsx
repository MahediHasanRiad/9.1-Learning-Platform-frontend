import Button from "@/shared/components/button";
import ErrorMsg from "@/shared/components/error-msg";
import InputField from "@/shared/components/input";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function AddNewSubject() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      class: "",
    },
  });

  const saveData = (data) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(saveData)}>
        <section className="grid md:grid-cols-2 gap-4">
          <div>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Subject Name are required !",
              }}
              render={({ field }) => (
                <InputField label="Subject Name" {...field} />
              )}
            />
            {<ErrorMsg text={errors.name?.message} />}
          </div>
          <div>
            <Controller
              name="class"
              control={control}
              rules={{
                required: "Class Name are required !",
              }}
              render={({ field }) => (
                <InputField label="Class Name" {...field} />
              )}
            />
            {<ErrorMsg text={errors.class?.message} />}
          </div>
        </section>

        {/* submit btn  */}
        <Button text={"ADD"} className={"float-right mt-10"} />
      </form>
    </>
  );
}

export default AddNewSubject;
