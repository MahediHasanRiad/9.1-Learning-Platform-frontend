import Button from "@/shared/utils/button";
import CustomMultiSelect from "@/shared/utils/custom-multi-select";
import DatePicker from "@/shared/utils/date";
import ErrorMsg from "@/shared/utils/error-msg";
import InputField from "@/shared/utils/input";
import MultiSelect from "@/shared/utils/multi-select";
import { useEffect, useState } from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useFormatedValue } from "../../hooks/useFormatedValue";
import { useDispatch, useSelector } from "react-redux";
import { createBatchAsyncThunk } from "../../redux/create-batch.thunk";
import TextareaField from "@/shared/utils/textarea";
import type { AppDispatch, RootState } from "@/store/store";
import type { StaffType, UpdateBatchType } from "../../coaching-type";
import { api } from "@/API/api-client";


interface Subject {
  readonly _id: string;
  name: string;
  className: string;
  userId: string;
}

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
      subjects: [],
      start_date: "",
      end_date: "",
      capacity: '',
      price: '',
      bio: "",
      assignedTeachers: [],
      recurringRule: [],
    },
  });


  const [allStaffs, setAllStaffs] = useState<StaffType[]>();
  const [allSubject, setAllSubject] = useState<Subject[]>();

  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.coaching);

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        // all staff
        const allStaff = await api.get(`/api/v1/coaching-staffs`, {
          withCredentials: true,
        });
        setAllStaffs(allStaff?.data?.data?.staff);

        // all subjects
        const allSubject = await api.get("/api/v1/subjects-by-user", {
          withCredentials: true,
        });
        setAllSubject(allSubject?.data?.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStaffs();
  }, []);

  // formated 
   const { formattedTeachers, formattedSubject, recurringRule } =
    useFormatedValue({ allStaffs, allSubject });


  // handle all data
  const saveData: SubmitHandler<Partial<UpdateBatchType>> = async (data) => {
    try {
      const formData = new FormData();

      if(data.name !== undefined) formData.append("name", data.name)
      if(data.start_date !== undefined) formData.append("start_date", data.start_date)
      if(data.end_date !== undefined) formData.append("end_date", data.end_date)
      if(data.capacity !== undefined) formData.append("capacity", data.capacity)
      if(data.price !== undefined) formData.append("price", data.price)
      
      if(data.recurringRule && Array.isArray(data.recurringRule)){
        data.recurringRule.forEach(r => formData.append("recurringRule", r))
      }

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
    } 
    catch (error: any) {
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
                  label="Batch Name *"
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
                  onChange={(e) => onChange(e.target.files?.[0])}
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
            {<ErrorMsg text={errors.assignedTeachers?.message} />}
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
        {/* {error && <ErrorMsg text={error} />} */}
        <Button
          text={`${loading ? "Loading..." : "ADD"}`}
          className={"float-right mt-10"}
        />
      </form>
    </>
  );
}

export default CreateBatch;
