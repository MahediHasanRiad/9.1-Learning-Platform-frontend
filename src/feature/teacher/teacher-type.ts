export interface TeacherType {
  userId?: string;
  education: string;
  experience: string;
  certificate: string;
}

export interface UserType {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  password: string;
  avatar: string;
  coverImage: string;
  bio: string;
  address: string;
  facebook: string;
  linkedIn: string;
}

export interface TeacherSliceType {
  readonly _id: string;
  userId: UserType;
  education: string;
  certificate: string;
  experience: string;
  availableDay: string[];
  availableTime: string[];
  subjects: string[],
  rating?: number;
}

export interface DemoClassType {
  readonly _id: string;
  title: string;
  videoURL: string;
  subjectId: string;
  batchId?: null | undefined | string,
  userId: string;
  status: string;
}

export interface initialStateType {
  user?: TeacherSliceType | null;
  demoVideos?: DemoClassType[] | null;
  loading: boolean;
  error: string | null | undefined | unknown;
}

export interface UpdateTeacherProfileType {
  name?: string;
  email?: string;
  mobile?: string;
  password?: string;
  avatar?: File | string;
  coverImage?: File | string;
  bio?: string;
  address?: string;
  facebook?: string;
  linkedIn?: string;
  education?: string;
  certificate?: string;
  experience?: string;
  availableDay?: string[];
  availableTime?: string[];
  subjects?: string[];
  rating?: number;
}