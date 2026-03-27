export interface UserType {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  avatar: File | string;
  coverImage?: File | string;
  bio?: string | undefined;
  address?: string | undefined;
  facebook?: string | undefined;
  linkedIn?: string | undefined;
}