import Button from "@/shared/utils/button";
import ErrorMsg from "@/shared/utils/error-msg";
import InputField from "@/shared/utils/input";
import { useEffect, useState } from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { createDemoClassAsyncThunk } from "@/feature/teacher/redux/createDemoClass.thunk";
import CustomMultiSelect from "../utils/custom-multi-select";
import type { DemoClassType, SubjectType } from "@/feature/teacher/teacher-type";
import type { AppDispatch } from "@/store/store";
import { dayOptions } from "@/feature/teacher/components/data";
import MultiSelect from "../utils/multi-select";
import { api } from "@/API/api-client";

function DemoClass() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      videoURL: "",
      subjectId: "",
      // batchId: "",
    },
  });

  const [subjectList, setSubjectList] = useState<SubjectType[]>();
  const dispatch = useDispatch<AppDispatch>();

  // formated according props
  const formattedSubjects = subjectList?.map((item) => ({
    id: item.id as string,
    label: item.name,
    value: item.name,
    description: item.className,
  })) ?? [];

  // get subject
  useEffect(() => {
    ;(async () => {
      const subjects = await api.get(`/api/v1/subjects-by-user`, {withCredentials: true});
      setSubjectList(subjects.data.data);
    })();
  }, []);

  // handle all data
  const saveData: SubmitHandler<DemoClassType> = async (data) => {
    try {
      console.log(data)
      await dispatch(
        createDemoClassAsyncThunk(data),
      ).unwrap();
      reset();
      toast.success("Demo Class Created");
    } 
    catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(saveData)}>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Controller
              name="title"
              control={control}
              rules={{
                required: "Title are required !!!",
              }}
              render={({ field }) => (
                <InputField
                  label="Title *"
                  placeholder="authorization class 1"
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.title?.message} />}
          </div>
          <div>
            <Controller
              name="videoURL"
              control={control}
              rules={{
                required: "videoURL are required !!!",
              }}
              render={({ field }) => (
                <InputField
                  label="Video Link *"
                  placeholder="https://......"
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.videoURL?.message} />}
          </div>
          <div>
            <Controller
              name="subjectId"
              control={control}
              defaultValue={''}
              rules={{
                required: "Subject Name are required !!!",
              }}
              render={({ field }) => (
                <CustomMultiSelect
                  multiple={false}
                  label="Subject Name *"
                  itemList={formattedSubjects ?? []}
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.subjectId?.message} />}
          </div>
          {/* <div>
            <Controller
              name="batchId"
              control={control}
              defaultValue={''}
              rules={{
                required: "Batch Name are required !!!",
              }}
              render={({ field }) => (
                <MultiSelect
                  label="Batch Name"
                  items={dayOptions}
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.batchId?.message} />}
          </div> */}
        </section>

        {/* submit button  */}
        <Button text={"ADD"} className={"float-right mt-10"} />
      </form>
    </section>
  );
}

export default DemoClass;
