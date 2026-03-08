import Button from "@/shared/utils/button";
import ErrorMsg from "@/shared/utils/error-msg";
import InputField from "@/shared/utils/input";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import axios from "axios";
import { toast } from "sonner";
import { createDemoClassAsyncThunk } from "@/feature/teacher/redux/createDemoClass.thunk";
import CustomMultiSelect from "../utils/custom-multi-select";

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
      batchId: "",
      // teacherId: "",
    },
  });

  const [subjectList, setSubjectList] = useState([]);
  const dispatch = useDispatch();

  // formated according props
  const formattedSubjects = subjectList?.map((item) => ({
    id: item._id,
    label: item.name,
    value: item.name,
    description: item.className,
  }));

  // get subject
  useEffect(() => {
    (async () => {
      const subjects = await axios.get(`/api/v1/subjectsByUser`);
      setSubjectList(subjects.data.data);
    })();
  }, []);

  // handle all data
  const saveData = async (data) => {
    try {
      await dispatch(
        createDemoClassAsyncThunk({
          title: data.title,
          videoURL: data.videoURL,
          subjectId: data.subjectId,
          batchId: data.batchId || null,
        }),
      ).unwrap();
      reset();
      toast.success("Demo Class Created");
    } catch (error) {
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
              defaultValue={[]}
              rules={{
                required: "Subject Name are required !!!",
              }}
              render={({ field }) => (
                <CustomMultiSelect
                  multiple={false}
                  label="Subject Name *"
                  itemList={formattedSubjects}
                  placeholder="Type subject name..."
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.subjectName?.message} />}
          </div>
          {/* <div>
            <Controller
              name="batchId"
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
          </div> */}
          {/* <div>
            <Controller
              name="teacherId"
              control={control}
              defaultValue={[]}
              rules={{ required: "Teacher Name is required !!!" }}
              render={({ field }) => (
                <CustomMultiSelect
                  label="Teacher Name *"
                  itemList={itemList}
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.teacherName?.message} />}
          </div> */}
        </section>

        {/* submit button  */}
        <Button text={"ADD"} className={"float-right mt-10"} />
      </form>
    </section>
  );
}

export default DemoClass;
