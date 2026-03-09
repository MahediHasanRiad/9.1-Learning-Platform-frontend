import { updateProfileAsyncThunk } from "@/feature/user/redux/updateProfile.thunk";
import { useDispatch } from "react-redux";

export const useProfileDropDown = () => {
  const dispatch = useDispatch();

  const updateInTeacherRole = async ({ id }) => {
    try {
      await dispatch(
        updateProfileAsyncThunk({ id: id, role: "Teacher" }),
      ).unwrap();
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    updateInTeacherRole,
  };
};
