import Button from "@/shared/utils/button";
import CustomMultiSelect from "@/shared/utils/custom-multi-select";
import ErrorMsg from "@/shared/utils/error-msg";
import SelectField from "@/shared/utils/select";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { createCoachingStaffAsyncThunk } from "../../redux/create-staff.thunk";


const roles = [
  {id: 1, name: 'Admin'},
  {id: 2, name: 'Manager'},
  {id: 3, name: 'Teacher'},
  {id: 4, name: 'Other'},
]

function AddNewStaff() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: {
    staffId: '',
    role: ''
  } });

  const dispatch = useDispatch()
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    ;(async () => {
      // get all users
      const users = await axios.get('/api/v1/users/all', {withCredentials: true})
      setAllUsers(users.data.data.users)
    })()
  }, [])

  // user formated
  const formatedUser = allUsers.map(user => ({
    id: user._id,
    label: user.name,
    value: user.name,
    img: user.avatar,
  }))

  const saveData = async (data) => {
    try {
      await dispatch(createCoachingStaffAsyncThunk(data)).unwrap();
      toast.success('New Staff Added')
      reset()
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit(saveData)}>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Controller
            name="staffId"
            control={control}
            render={({ field }) => (
              <CustomMultiSelect
                label="Name"
                itemList={formatedUser}
                placeholder="mahedi hasan riad"
                multiple= {false}
                {...field}
              />
            )}
          />
          {<ErrorMsg text={errors.staffId?.message} />}
          </div>
          <div>
            <Controller
            name="role"
            control={control}
            // defaultValues={[]}
            render={({ field }) => (
              <SelectField
                label="Rule"
                placeholder="staff"
                items={roles}
                {...field}
              />
            )}
          />
          {<ErrorMsg text={errors.name?.message} />}
          </div>
        </section>

        {/* submit btn  */}
        <Button text={"ADD"} className={"float-right mt-10"} />
      </form>
    </section>
  );
}

export default AddNewStaff;
