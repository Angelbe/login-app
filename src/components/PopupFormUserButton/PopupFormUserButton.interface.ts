import React from "react";
import { IUser } from "src/interfaces/user.interface";
import {
  IInputListItem,
  THandleSaveEdit,
} from "src/components/Settings/Settings.interface";

export interface IPopupFormUserButton {
  user: IUser;
  handleSave: THandleSaveEdit;
  inputsList: IInputListItem[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
