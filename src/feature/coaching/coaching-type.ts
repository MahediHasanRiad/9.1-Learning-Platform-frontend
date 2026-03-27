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
  bio?: string | undefined;
  capacity: number;
  coachingId: string;
  coverImage: string;
  end_date: string;
  name: string;
  price: number;
  recurringRule: string[];
  start_date: string;
  subjects: Subjects[];
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
