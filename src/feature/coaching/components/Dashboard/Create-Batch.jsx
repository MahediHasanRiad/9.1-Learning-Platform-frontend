import Button from "@/shared/utils/button";
import CustomMultiSelect from "@/shared/utils/custom-multi-select";
import DatePicker from "@/shared/utils/date";
import InputField from "@/shared/utils/input";
import MultiSelect from "@/shared/utils/multi-select";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const subjects = [
  {id: 1, value: 'bangla', label: 'Bangla', description: 'Class 9'},
  {id: 2, value: 'math', label: 'Math', description: 'Class 10'},
  {id: 3, value: 'english', label: 'English', description: 'Class 6'}
]
const teachers = [
  {id: 1, img: '/public/riad.png', value: 'mahedi hasan riad', label: 'mahedi hasan riad'},
  {id: 2, img: '/public/riad.png', value: 'mahedi ', label: 'mahedi'},
  {id: 3, img: '/public/riad.png', value: 'mahedi riad', label: 'mahedi riad'},
]

const recurringRule = [
  "Saturday",
  "Sunday",
  "Monday"
]

function CreateBatch() {

   const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      defaultValues: {
        name: "",
        subjects: [''],
        startDate: "",
        endDate: "",
        capacity: "",
        price: "",
        teachers: [""],
        recurringRule: ""
      },
    });
  
    const saveData = (data) => {
      console.log(data);
    };


  return (
    <>
     <form onSubmit={handleSubmit(saveData)}>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <Controller 
            name="subjects"
            control={control}
            render={({field}) => <CustomMultiSelect label={'Subjects'} itemList={subjects} {...field} />}
          />
          <Controller 
            name="startDate"
            control={control}
            render={({field}) => <DatePicker label={'Start Date'} {...field} />}
          />
          <Controller 
            name="endDate"
            control={control}
            render={({field}) => <DatePicker label={'End Date'} {...field} />}
          />
          <Controller 
            name="capacity"
            control={control}
            render={({field}) => <InputField label={'Capacity'} placeholder="100" {...field} />}
          />
          <Controller 
            name="price"
            control={control}
            render={({field}) => <InputField label={'Price'} placeholder="6500/-" {...field} />}
          />
          <Controller 
            name="teachers"
            control={control}
            render={({field}) => <CustomMultiSelect label={'Teachers'} itemList={teachers} {...field} />}
          />
          <Controller 
            name="recurringRule"
            control={control}
            render={({field}) => <MultiSelect label={'Recurring Rule'} items={recurringRule} {...field} />}
          />
        </section>

        {/* submit btn  */}
        <Button text={"ADD"} className={"float-right mt-10"} />
      </form>
    </>
  )
}

export default CreateBatch
