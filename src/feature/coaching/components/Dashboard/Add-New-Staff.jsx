import Button from "@/shared/utils/button";
import ErrorMsg from "@/shared/utils/error-msg";
import InputField from "@/shared/utils/input";
import SelectField from "@/shared/utils/select";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const users = [
  {id: 1, name: 'riad'},
  {id: 2, name: 'shamim'},
  {id: 3, name: 'tamim'},
  {id: 4, name: 'nilo'},
]

function AddNewStaff() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: {
    name: '',
    role: ''
  } });

  const saveData = (data) => {
    console.log(data)
  }

  return (
    <section>
      <form onSubmit={handleSubmit(saveData)}>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
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
          {<ErrorMsg text={errors.name?.message} />}
          </div>
          <div>
            <Controller
            name="role"
            control={control}
            // defaultValues={[]}
            render={({ field }) => (
              <SelectField
                label="Rule"
                placeholder="staff"
                items={users}
                {...field}
              />
            )}
          />
          {<ErrorMsg text={errors.name?.message} />}
          </div>
        </section>

        {/* submit btn  */}
        <Button text={"ADD"} className={"float-right mt-10"} />
      </form>
    </section>
  );
}

export default AddNewStaff;
