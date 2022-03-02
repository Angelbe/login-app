import { EGetUser } from "../../interfaces/user.interface";
import { ILoginInputs } from "./LoginForm.interface";

export const loginInputs: ILoginInputs[] = [
  {
    key: EGetUser.userName,
    title: "type your user*",
    type: "text",
    placeholder: "name",
  },
  {
    key: EGetUser.password,
    title: "type your password*",
    type: "password",
    placeholder: "password",
  },
];
