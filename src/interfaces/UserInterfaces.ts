export interface IJWTPayload {
  id: number;
  userName: string;
}
export interface INewUser {
  name: string;
  lastName?: string;
  userName: string;
  password: string;
}
