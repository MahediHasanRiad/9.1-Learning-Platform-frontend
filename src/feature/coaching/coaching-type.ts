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
  capacity: string;
  coachingId: string;
  coverImage: File;
  start_date: string;
  end_date: string;
  name: string;
  price: string;
  recurringRule: string[];
  subjects: Subjects[];
  bio?: string | undefined;
}

export interface UpdateBatchType {
  assignedTeachers: string[];
  capacity: string;
  coachingId: string;
  coverImage: File | string;
  start_date: string;
  end_date: string;
  name: string;
  price: string;
  recurringRule: string[];
  subjects: string[];
  bio?: string | undefined;
}

export interface CoachingBatchCardType {
  image: File | string | any;
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
  batches: ShowBatchType[];
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
  readonly id: string;
  role: 'Admin' | 'Manager' | 'Teacher' | 'Other';
  userId: string;
  name: string;
  avatar: string;
  coachingId: string;
  CcName: string;
  staffLink: string;
}

export interface CoachingType {
  readonly id: string;
  userId: string;
  CcName: string;
  address: string;
  officeTime?: string;
  avatar: File | string;
  coverImage: File | string;
  bio: string;
  email: string;
  facebook: string;
  linkedIn: string;
  mobile: string;
  website: string;
  status: "Pending" | "Approved" | "Suspended ";
}

export interface AdminType {
  email: string;
  name: string;
  contact: string;
  linkedIn: string;
  facebook: string;
}