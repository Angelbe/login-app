export interface IUser {
  name: string;
  password: string;
  id: number;
  genre: string;
  location: string;
}

export interface IGetUser {
  userName: string;
  password: string;
}

export type TGetUser = (param: IGetUser) => Promise<IUser>;
