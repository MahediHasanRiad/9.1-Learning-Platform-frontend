import Button from "@/shared/components/button";
import ErrorMsg from "@/shared/components/error-msg";
import InputField from "@/shared/components/input";
import MultiSelect from "@/shared/components/multi-select";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import CustomMultiSelect from "@/shared/components/custom-multi-select";

const dayOptions = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
const subjectsList = [
  {id: 1, value: "english", label: 'English', description: 'class 10'},
  {id: 2, value: "bangla", label: 'Bangla'},
];

const itemList = [
  {
    id: "1",
    img: "/public/riad.png",
    value: "mahedi hasan riad",
    label: "Mahedi Hasan Riad",
  },
  {
    id: "1",
    value: "mahedi hasan",
    label: "Mahedi Hasan",
  },
];

function DemoClass() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      videoLink: "",
      subjectName: "",
      batchName: "",
      teacherName: "",
    },
  });

  // handle all data 
  const saveData = (data) => {
    console.log(data);
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
                  label="Title"
                  placeholder="authorization class 1"
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.title?.message} />}
          </div>
          <div>
            <Controller
              name="videoLink"
              control={control}
              rules={{
                required: "videoLink are required !!!",
              }}
              render={({ field }) => (
                <InputField
                  label="Video Link"
                  placeholder="https://......"
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.videoLink?.message} />}
          </div>
          <div>
            <Controller
              name="subjectName"
              control={control}
              defaultValue={[]}
              rules={{
                required: "Subject Name are required !!!",
              }}
              render={({ field }) => (
                <CustomMultiSelect
                  label="Subject Name"
                  itemList={subjectsList}
                  placeholder="Type subject name..."
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.subjectName?.message} />}
          </div>
          <div>
            <Controller
              name="batchName"
              control={control}
              defaultValue={[]}
              rules={{
                required: "Batch Name are required !!!",
              }}
              render={({ field }) => (
                <MultiSelect
                  label="Batch Name"
                  items={dayOptions}
                  placeholder="Type batch name..."
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.batchName?.message} />}
          </div>
          <div>
            <Controller
              name="teacherName"
              control={control}
              defaultValue={[]}
              rules={{ required: "Teacher Name is required !!!" }}
              render={({ field }) => (
                <CustomMultiSelect
                  label="Teacher Name"
                  itemList={itemList}
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.teacherName?.message} />}
          </div>
        </section>

        {/* submit button  */}
        <Button text={"ADD"} className={"float-right mt-10"} />
      </form>
    </section>
  );
}

export default DemoClass;
