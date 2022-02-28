import React, { ForwardedRef } from "react";

interface IButtonProps {
  onClick?: never;
  children?: React.ReactNode;
  type?: string;
  ref?: ForwardedRef<HTMLButtonElement>;
  color?: string;
  bcolor?: string;
  disabled?: boolean;
}

export type { IButtonProps };
