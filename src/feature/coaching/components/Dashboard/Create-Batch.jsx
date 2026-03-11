import Button from "@/shared/utils/button";
import CustomMultiSelect from "@/shared/utils/custom-multi-select";
import DatePicker from "@/shared/utils/date";
import ErrorMsg from "@/shared/utils/error-msg";
import InputField from "@/shared/utils/input";
import MultiSelect from "@/shared/utils/multi-select";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { useFormatedValue } from "../../hooks/useFormatedValue";
import { useDispatch, useSelector } from "react-redux";
import { createBatchAsyncThunk } from "../../redux/create-batch.thunk";
import TextareaField from "@/shared/utils/textarea";

function CreateBatch() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      coverImage: "",
      subjects: "",
      start_date: "",
      end_date: "",
      capacity: "",
      price: "",
      bio: "",
      assignedTeachers: "",
      recurringRule: "",
    },
  });

  const [allStaffs, setAllStaffs] = useState([]);
  const [allSubject, setAllSubject] = useState([]);

  const { formattedTeachers, formattedSubject, recurringRule } =
    useFormatedValue({ allStaffs, allSubject });

  const dispatch = useDispatch();
  const { batch, loading, error } = useSelector((state) => state.batch);

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        // all staff
        const allStaff = await axios.get("/api/v1/coaching-all-staff", {
          withCredentials: true,
        });
        setAllStaffs(allStaff?.data?.data);

        // all subjects
        const allSubject = await axios.get("/api/v1/subjects-by-user", {
          withCredentials: true,
        });
        setAllSubject(allSubject?.data?.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStaffs();
  }, []);

  // handle all data
  const saveData = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("coverImage", data.coverImage[0]);
      formData.append("start_date", data.start_date);
      formData.append("end_date", data.end_date);
      formData.append("capacity", data.capacity);
      formData.append("price", data.price);
      formData.append("recurringRule", data.recurringRule);

      if (data.coverImage) {
        formData.append("coverImage", data.coverImage);
      }

      if (data.subjects && Array.isArray(data.subjects)) {
        data.subjects.forEach((sub) => formData.append("subjects", sub));
      }

      if (data.assignedTeachers && Array.isArray(data.assignedTeachers)) {
        data.assignedTeachers.forEach((teacherId) => {
          if (teacherId) formData.append("assignedTeachers", teacherId);
        });
      }

      await dispatch(createBatchAsyncThunk(formData)).unwrap();
      reset();
      toast.success("New Batch Created");
    } catch (error) {
      toast.error(error);
      console.error("Batch Create Error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(saveData)}>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Name field are required !!!",
              }}
              render={({ field }) => (
                <InputField
                  label="Name *"
                  placeholder="mahedi hasan riad"
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.name?.message} />}
          </div>
          <div>
            <Controller
              name="coverImage"
              rules={{
                required: "Cover Image required !!!",
              }}
              control={control}
              render={({ field: { onChange } }) => (
                <InputField
                  label="Cover Image"
                  type="file"
                  onChange={(e) => onChange(e.target.files[0])}
                />
              )}
            />
            {<ErrorMsg text={errors.coverImage?.message} />}
          </div>
          <div>
            <Controller
              name="subjects"
              control={control}
              rules={{
                required: "Subjects field are required !!!",
              }}
              render={({ field }) => (
                <CustomMultiSelect
                  label={"Subjects *"}
                  itemList={formattedSubject}
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.subjects?.message} />}
          </div>
          <div>
            <Controller
              name="start_date"
              control={control}
              rules={{
                required: "Start Date field are required !!!",
              }}
              render={({ field }) => (
                <DatePicker label={"Start Date *"} {...field} />
              )}
            />
            {<ErrorMsg text={errors.start_date?.message} />}
          </div>
          <div>
            <Controller
              name="end_date"
              control={control}
              rules={{
                required: "End Date field are required !!!",
              }}
              render={({ field }) => (
                <DatePicker label={"End Date *"} {...field} />
              )}
            />
            {<ErrorMsg text={errors.end_date?.message} />}
          </div>
          <div>
            <Controller
              name="capacity"
              control={control}
              rules={{
                required: "Capacity field are required !!!",
              }}
              render={({ field }) => (
                <InputField label={"Capacity *"} placeholder="100" {...field} />
              )}
            />
            {<ErrorMsg text={errors.capacity?.message} />}
          </div>
          <div>
            <Controller
              name="price"
              control={control}
              rules={{
                required: "Price field are required !!!",
              }}
              render={({ field }) => (
                <InputField label={"Price *"} placeholder="6500/-" {...field} />
              )}
            />
            {<ErrorMsg text={errors.price?.message} />}
          </div>
          <div>
            <Controller
              name="assignedTeachers"
              control={control}
              rules={{
                required: "Teachers field are required !!!",
              }}
              render={({ field }) => (
                <CustomMultiSelect
                  label={"Teachers *"}
                  itemList={formattedTeachers}
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.teachers?.message} />}
          </div>
          <div>
            <Controller
              name="recurringRule"
              control={control}
              rules={{
                required: "Recurring Rule field are required !!!",
              }}
              render={({ field }) => (
                <MultiSelect
                  label={"Recurring Rule *"}
                  items={recurringRule}
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.recurringRule?.message} />}
          </div>
          <div>
            <Controller
              name="bio"
              control={control}
              render={({ field }) => (
                <TextareaField
                  label={"Description"}
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.bio?.message} />}
          </div>
        </section>

        {/* submit btn  */}
        {error && <ErrorMsg text={error} />}
        <Button
          text={`${loading ? "Loading..." : "ADD"}`}
          className={"float-right mt-10"}
        />
      </form>
    </>
  );
}

export default CreateBatch;
