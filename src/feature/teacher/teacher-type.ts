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
  title: string;
  videoURL: string;
  subjectId: string;
  batchId?: null | undefined | string,
  userId?: string | undefined;
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

export interface SelectItem {
  _id?: string;
  value: string;
  label: string;
  img?: string;
  description?: string;
}

export interface CustomMultiSelectType {
  label?: string;
  value: string;
  itemList: SelectItem[];
  multiple?: boolean;
  onChange: (value: string | string[] | null) => void;
  id?: string;
}

export interface SubjectType {
   _id: string;
  name: string;
  className: string,
}

export interface CreateSubjectType {
  name: string;
  className: string;
}

export interface ResetPassType {
  oldpassword: string;
  newpassword: string;
}
