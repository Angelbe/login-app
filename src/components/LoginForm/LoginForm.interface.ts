import { FormEventHandler } from "react";
import { EGetUser, EUserKeys } from "src/interfaces/user.interface";

export interface ILoginInputs {
  key: EGetUser;
  title: string;
  type: string;
  placeholder?: string;
}

export interface ILoginInputContainer {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export interface IRegisterInput {
  key: EUserKeys;
  title: string;
  placeholder?: string;
}

export type THandleSubmit = FormEventHandler<HTMLFormElement>;
