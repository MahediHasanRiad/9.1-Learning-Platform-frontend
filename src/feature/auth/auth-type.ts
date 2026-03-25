export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  mobile: string,
  avatar: string,
  coverImage: string,
  role: string,
  bio: string,
};

export interface RegisterResponse {
  success: boolean;
  user: {
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