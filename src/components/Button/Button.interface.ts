import React, { ForwardedRef } from "react";

interface IButtonProps {
  children?: React.ReactNode;
  ref?: ForwardedRef<HTMLButtonElement>;
  color?: string;
  bcolor?: string;
}

export type { IButtonProps };
