import { FormEventHandler } from "react";
import { EGetUser } from "src/interfaces/user.interface";

export interface ILoginInputs {
  key: EGetUser;
  title: string;
  type: string;
}

export interface ILoginInputContainer {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export type THandleSubmit = FormEventHandler<HTMLFormElement>;
