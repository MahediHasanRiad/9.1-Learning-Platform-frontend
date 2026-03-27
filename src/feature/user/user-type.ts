export interface UserType {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  avatar: string;
  coverImage?: string | undefined;
  bio?: string | undefined;
  address?: string | undefined;
  facebook?: string | undefined;
  linkedIn?: string | undefined;
}