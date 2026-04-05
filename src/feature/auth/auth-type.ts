import type { CoachingType } from "../coaching/coaching-type";

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  mobile: string,
  avatar: File | undefined,
  coverImage?: File | null | undefined,
  bio?: string | undefined,
};

export interface RegisterResponse {
  success: boolean;
  data: {
    name: string;
    email: string;
    password: string;
    mobile: string,
    avatar: string,
    coverImage: string,
    role: string,
    bio: string,
  };
  message: string;
};

 export interface User {
  readonly id?: string;
  name: string;
  email: string;
  password: string;
  mobile: string,
  avatar: string,
  coverImage: string,
  bio: string,
}

export interface Teacher {
  readonly id: string;
  education: string;
  certificate: string;
  experience: string;
  availableDay: string;
  availableTime: string;
  rating: number;
  userId: string;
  user: {
    avatar: string;
    name: string;
  }
}

export interface AuthSliceType {
  user: User | null;
  teacher: Teacher | null;
  coaching: CoachingType | null;
  role: 'User' | 'Teacher' | 'Coaching',
  loading: boolean,
  error: string | null | undefined | unknown,
}


export interface LoginReturnType {
  success: boolean;
  data: User;
  token: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface TeacherCardType {
  path: string;
  image: string;
  name: string;
  education: string;
  rating: number;
  btnText?: string;
}

export interface TeacherFilterType {
  search: string;
  sortType: "desc" | "asc";
  page: string;
  limit: string;
}


export interface AllTeacherType {
  teachers: Teacher[] | undefined;
  links: {
    self: string;
  },
  pagination: {
    page: number;
    limit: number;
    totalItems: number;
    totalPage: number;
  }
}

export interface QueryParamsType {
  search: string;
  limit: number;
  page: number;
  sortType: "desc" | "asc";
}

