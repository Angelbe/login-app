import { MouseEvent } from "react";

export interface IHandleSubmit {
  event: MouseEvent<HTMLButtonElement>;
}

export type THandleSubmit = (param: IHandleSubmit) => void;
