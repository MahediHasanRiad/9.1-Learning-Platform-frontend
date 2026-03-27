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
  readonly _id: string;
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
  btnText?: string;
  batch: ShowBatchType;
  path?: string;
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

export interface StaffType {
  readonly _id: string;
  role: 'Admin' | 'Manager' | 'Teacher' | 'Other';
  userId: string;
  name: string;
  avatar: string;
  coachingId: string;
  CcName: string;
  staffLink: string;
}

export interface CoachingType {
  userId: string;
  CcName: string;
  address: string;
  officeTime?: string;
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
