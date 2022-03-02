import { FormEvent } from "react";
import { EUserKeys, IUser } from "src/interfaces/user.interface";

export interface IHandleSaveEdit {
  event: FormEvent<HTMLFormElement>;
  userFromPopup: IUser;
}

export interface ISettings {
  title: string;
}

export type THandleSaveEdit = (param: IHandleSaveEdit) => void;

export interface IInputListItem {
  key: EUserKeys;
  title: string;
}
