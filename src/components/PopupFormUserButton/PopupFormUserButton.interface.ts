import React from "react";
import { IUser } from "src/interfaces/user.interface";
import {
  IInputListItem,
  THandleSaveEdit,
} from "src/components/Settings/Settings.interface";
import { IPopupFormUser } from "../PopupFormUser/PopupFormUser.interface";

export interface IPopupFormUserButton extends IPopupFormUser {
  buttonText: string;
  isLoading?: boolean;
}
