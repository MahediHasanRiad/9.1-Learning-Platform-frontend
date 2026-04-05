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