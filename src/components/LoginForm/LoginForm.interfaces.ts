import { FormEventHandler, MouseEvent } from "react";

export interface IHandleSubmit {
  event: MouseEvent<HTMLButtonElement>;
}

export type THandleSubmit = FormEventHandler<HTMLFormElement>;
