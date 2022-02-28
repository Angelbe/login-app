import { store } from "./store";

export interface ITheme {
  defaultFontSize: string;
  mainColor: string;
  mainColorlighter: string;
  secundaryColor: string;
  secundaryColorLighter: string;
  secundaryColorLight: string;
  disabledColor: string;
  borderRadius: string;
}

export interface IUser {
  name: string;
  password: string;
  id: number;
  genre: string;
  location: string;
}

export type TConfirmLoggedIn = (user: IUser) => boolean;

export type RootState = ReturnType<typeof store.getState>;
