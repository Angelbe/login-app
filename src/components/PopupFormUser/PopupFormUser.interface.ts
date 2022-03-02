import React, { FormEventHandler } from "react";
import {
  IInputListItem,
  THandleSaveEdit,
} from "src/components/Settings/Settings.interface";
import { IUser } from "src/interfaces/user.interface";

export interface IPopupFormUser {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSave: THandleSaveEdit;
  user?: IUser;
  popupTitle: string;
  inputsList: IInputListItem[];
  isLoading?: boolean;
  placeholder?: string;
}

export type THandleSubmit = FormEventHandler<HTMLFormElement>;
