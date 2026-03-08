import { createSubjectAsyncThunk } from "@/feature/teacher/redux/createSubject.thunk";
import Button from "@/shared/utils/button";
import ErrorMsg from "@/shared/utils/error-msg";
import InputField from "@/shared/utils/input";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { toast } from "sonner";

function AddNewSubject() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      className: "",
    },
  });

  const {id} = useParams()
  const dispatch = useDispatch()

  const saveData = async (data) => {
    try {
      console.log(data)
      await dispatch(createSubjectAsyncThunk(data)).unwrap()
      reset()
      toast.success('Suject Created Successfully')
    } catch (error) {
      toast.error(error)
    }
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
              name="className"
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
