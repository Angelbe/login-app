import { IPopupFormUser } from "../PopupFormUser/PopupFormUser.interface";

export interface IPopupFormUserButton extends IPopupFormUser {
  buttonText: string;
  isLoading?: boolean;
}
