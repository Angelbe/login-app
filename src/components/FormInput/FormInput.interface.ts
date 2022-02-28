import { ChangeEvent } from "react";

export type THandleChange = (event: ChangeEvent<HTMLInputElement>) => void;

export interface IFormInput {
  title: string;
  type?: string;
  name?: string;
  onChange?: THandleChange;
}
