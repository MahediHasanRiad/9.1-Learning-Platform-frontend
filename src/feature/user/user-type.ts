import type { AllBatchType, ShowBatchType } from "../coaching/coaching-type";

export interface UserType {
  readonly id: string;
  name: string;
  email: string;
  mobile: string;
  avatar: File | string | undefined;
  coverImage?: File | string | undefined;
  bio?: string | undefined;
  address?: string | undefined;
  facebook?: string | undefined;
  linkedIn?: string | undefined;
}

export interface EnrolledBatchType {
  readonly id: string;
  batch: ShowBatchType;
  studentId: string;
  batchId: string;
  status: string;
}