import type { SubjectType } from "@/feature/teacher/teacher-type";
import type { ShowBatchType, StaffType } from "../coaching-type";
import type { QueryParamsType } from "@/feature/auth/auth-type";


interface SubStaffType {
  allStaffs: StaffType[] | undefined;
  allSubject: SubjectType[] | undefined;
}

export const useFormatedValue = ({allStaffs, allSubject}: SubStaffType) => {

  // teacher formated
  const formattedTeachers = allStaffs?.map((item) => ({
    id: item._id,
    img: item.avatar,
    value: item.name,
    label: item.name,
  })) ?? [];
  // subject formated
  const formattedSubject = allSubject?.map((item) => ({
    id: item._id,
    value: item.name,
    label: item.name,
    description: item.className,
  })) ?? [];

  const recurringRule = [
  "Saturday",
  "Sunday",
  "Monday",
  "Twesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

  return {
    formattedTeachers,
    formattedSubject,
    recurringRule
  }
}