import type { SubjectType } from "../teacher/teacher-type";

interface AssignedTeacherType {
  id: string;
  name: string;
  avatar: string;
}

interface Subjects {
  _id: string;
  name: string;
  className: string;
}

export interface ShowBatchType {
  assignedTeachers: AssignedTeacherType[];
  capacity: number;
  coachingId: string;
  coverImage: string;
  start_date: string;
  end_date: string;
  name: string;
  price: number;
  recurringRule: string[];
  subjects: Subjects[];
  bio?: string | undefined;
}

export interface CoachingBatchCardType {
  image: string;
  name: string;
  subjects: Subjects[];
  start: string;
  end: string;
  btnText: string;
  batch: ShowBatchType;
}

export interface PaginationType {
  limit: number;
  page: number;
  totalItems: number;
  totalPage: number;
}

export interface AllBatchType {
  batch: ShowBatchType[];
  links: {
    self: string;
  };
  pagination: PaginationType;
}

export interface CreateCoachingType {
  CcName: string;
  address: string;
}

interface StaffType {
  _id: string;
  staffId: {
      _id: string;
      name: string;
      mobile: string;
      avatar: string;
  },
  coachingId: {
      _id: string;
      CcName: string;
  },
  role: string;
}

export interface CoachingType {
  userId: string;
  CcName: string;
  address: string;
  subjects: SubjectType[];
  staffs: StaffType[];
  batch: ShowBatchType[];
  avatar: string;
  bio: string;
  coverImage: string;
  email: string;
  facebook: string;
  linkedIn: string;
  mobile: string;
  website: string;
  status: "Pending" | "Approved" | "Suspended ";
}
