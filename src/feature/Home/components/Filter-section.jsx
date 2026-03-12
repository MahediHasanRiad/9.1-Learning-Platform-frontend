import Dropdown from "@/feature/teacher/utils/DropDown";
import FilterItems from "@/feature/teacher/utils/filter";
import Button from "@/shared/utils/button";
import InputField from "@/shared/utils/input";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function FilterSection({filterChange}) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      search: "",
      sortType: "",
      sortBy: "",
      page: "",
      limit: "",
    },
  });

  const saveData = (data) => {
    console.log(data);
    filterChange(data)

  };

  return (
    <>
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
          {/* children  */}
          <Controller
            name="sortType"
            control={control}
            render={({ field }) => (
              <Dropdown title="Type" items={["asc", "dec"]} {...field} />
            )}
          />
          <Controller
            name="sortBy"
            control={control}
            render={({ field }) => (
              <Dropdown
                title="Sort"
                items={["updatedAt", "Price"]}
                {...field}
              />
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
    </>
  );
}

export default FilterSection;
