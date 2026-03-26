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

 interface User {
  name: string;
  email: string;
  password: string;
  mobile: string,
  avatar: string,
  coverImage: string,
  bio: string,
}

 interface Teacher {
  userId: string;
  education: string;
  certificate: string;
  experience: string;
  availableDay: string;
  availableTime: string;
  rating: number;
}

interface Coaching {
  CcName: string;
  address: string;
  subjects: string[];
  staffs: string[];
  batch: string[];
  userId: string;
  avatar: string;
  bio: string;
  coverImage: string;
  email: string;
  facebook: string;
  linkedIn: string;
  mobile: string;
  website: string;
  status: 'Pending' | 'Approved' | 'Suspended ';
}

export interface AuthSliceType {
  user: User | null;
  teacher: Teacher | null;
  coaching: Coaching | null;
  role: 'User' | 'Teacher' | 'Coaching',
  loading: boolean,
  error: string | null | undefined,
}