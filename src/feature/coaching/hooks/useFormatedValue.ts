import type { SubjectType } from "@/feature/teacher/teacher-type";
import type { StaffType } from "../coaching-type";

interface SubStaffType {
  allStaffs: Partial<StaffType[]> | undefined;
  allSubject: SubjectType[] | undefined;
}

export const useFormatedValue = ({ allStaffs, allSubject }: SubStaffType) => {
  // teacher formated
  const formattedTeachers =
    allStaffs?.map((item) => ({
      id: item?.id ?? "",
      img: (item?.user?.avatar instanceof File
          ? URL.createObjectURL(item.user.avatar)
          : item?.user?.avatar) ?? "", 
      value: item?.user?.name ?? "",
      label: item?.user?.id ?? "",
    })) ?? [];


  // subject formated
  const formattedSubject =
    allSubject?.map((item) => ({
      id: item.id ?? "",
      value: item.name ?? "",
      label: item.id ?? "",
      description: item.className ?? "",
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
    recurringRule,
  };
};
