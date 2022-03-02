export enum EUserKeys {
  name = "name",
  location = "location",
  genre = "genre",
  password = "password",
  id = "id",
}

export interface IUser {
  [EUserKeys.name]: string;
  [EUserKeys.password]: string;
  [EUserKeys.genre]: string;
  [EUserKeys.location]: string;
  [EUserKeys.id]: string;
}

export enum EGetUser {
  userName = "userName",
  password = "password",
}

export interface IGetUser {
  [EGetUser.userName]: string;
  [EGetUser.password]: string;
}

export interface IUpdateUser {
  user: IUser;
}

export interface IRegisterUser {
  user: IUser;
}

export type TConfirmLoggedIn = (user: IUser) => boolean;
export type TGetUser = (param: IGetUser) => Promise<IUser>;
export type TUpdateUser = (param: IUpdateUser) => Promise<string>;
export type TRegisterUser = (param: IRegisterUser) => Promise<string>;
