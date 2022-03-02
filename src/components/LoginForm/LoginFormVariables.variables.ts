import { EGetUser } from "../../interfaces/user.interface";
import { ILoginInputs } from "./LoginForm.interface";

export const loginInputs: ILoginInputs[] = [
  { key: EGetUser.userName, title: "Name", type: "text" },
  { key: EGetUser.password, title: "Password", type: "password" },
];
