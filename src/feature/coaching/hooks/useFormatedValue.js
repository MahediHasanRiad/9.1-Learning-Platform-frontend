export const useFormatedValue = ({allStaffs, allSubject}) => {

  // teacher formated
  const formattedTeachers = allStaffs?.map((item) => ({
    id: item._id,
    img: item.staffId?.avatar,
    value: item.staffId?.name,
    label: item.staffId?.name,
  }));
  // subject formated
  const formattedSubject = allSubject?.map((item) => ({
    id: item._id,
    value: item.name,
    label: item.name,
    description: item.className,
  }));

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