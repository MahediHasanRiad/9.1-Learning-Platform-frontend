import Button from "@/shared/utils/button";
import CustomMultiSelect from "@/shared/utils/custom-multi-select";
import ErrorMsg from "@/shared/utils/error-msg";
import SelectField from "@/shared/utils/select";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { createCoachingStaffAsyncThunk } from "../../redux/create-staff.thunk";
import type { AppDispatch } from "@/store/store";

interface UserType {
  _id: string;
  name: string;
  avatar: string;
}

interface AddStaffType {
  staffId: string;
  role: "Admin" | "Manager" | "Teacher" | "Other";
}

const roles = [
  { id: "1", name: "Admin" },
  { id: "2", name: "Manager" },
  { id: "3", name: "Teacher" },
  { id: "4", name: "Other" },
];

function AddNewStaff() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddStaffType>({
    defaultValues: {
      staffId: "",
      role: "Teacher",
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const [allUsers, setAllUsers] = useState<UserType[]>();

  useEffect(() => {
    (async () => {
      // get all users
      const users = await axios.get("/api/v1/users/all", {
        withCredentials: true,
      });
      setAllUsers(users.data.data.users);
    })();
  }, []);

  // user formated
  const formatedUser =
    allUsers?.map((user) => ({
      id: user._id,
      label: user.name,
      value: user.name,
      img: user.avatar,
    })) ?? [];

  const saveData: SubmitHandler<AddStaffType> = async (data) => {
    try {
      await dispatch(createCoachingStaffAsyncThunk(data)).unwrap();
      toast.success("New Staff Added");
      reset();
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(saveData)}>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Controller
              name="staffId"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <CustomMultiSelect
                  label="Name"
                  itemList={formatedUser}
                  multiple={false}
                  value={field.value ? [field.value] : []}
                  onChange={(val) => {
                    field.onChange(
                      Array.isArray(val) ? (val[0] ?? "") : (val ?? ""),
                    );
                  }}
                />
              )}
            />
            {<ErrorMsg text={errors.staffId?.message} />}
          </div>
          <div>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <SelectField
                  label="Rule"
                  placeholder="staff"
                  items={roles}
                  {...field}
                />
              )}
            />
            {<ErrorMsg text={errors.role?.message} />}
          </div>
        </section>

        {/* submit btn  */}
        <Button text={"ADD"} className={"float-right mt-10"} />
      </form>
    </section>
  );
}

export default AddNewStaff;
