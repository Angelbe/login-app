import React, { ForwardedRef } from "react";
import { THandleSubmit } from "../LoginForm/LoginForm.interfaces";

interface IButtonProps {
  children?: React.ReactNode;
  onClick: THandleSubmit;
  ref?: ForwardedRef<HTMLButtonElement>;
  color?: string;
  bcolor?: string;
  disabled?: boolean;
}

interface IButtonStyledProps {
  color?: string;
  bcolor?: string;
}

export type { IButtonStyledProps, IButtonProps };
