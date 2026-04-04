import type { TeacherFilterType } from "@/feature/auth/auth-type";
import Dropdown from "@/feature/teacher/utils/DropDown";
import FilterItems from "@/feature/teacher/utils/filter";
import Button from "@/shared/utils/button";
import InputField from "@/shared/utils/input";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";

function FilterSection({ setFilterQuery }: any) {
  const { control, handleSubmit } = useForm<TeacherFilterType>({
    defaultValues: {
      search: "",
      sortType: "desc",
      page: "1",
      limit: "10",
    },
  });

  const saveData: SubmitHandler<TeacherFilterType> = (data) => {
    console.log(data);
    setFilterQuery(data);
  };

  return (
    <form onSubmit={handleSubmit(saveData)}>
      <FilterItems
        search={
          <>
            <Controller
              name="search"
              control={control}
              render={({ field }) => (
                <InputField placeholder={"search..."} {...field} />
              )}
            />
            <Button text={"Submit"} />
          </>
        }
      >
        <Controller
          name="sortType"
          control={control}
          render={({ field }) => (
            <Dropdown title="Type" items={["asc", "desc"]} {...field} />
          )}
        />
        <Controller
          name="limit"
          control={control}
          render={({ field }) => (
            <Dropdown title="Limit" items={["10", "25", "50"]} {...field} />
          )}
        />
        <Button text={"Filter"} />
      </FilterItems>
    </form>
  );
}

export default FilterSection;