import React from "react";
import { ButtonStyled } from "./Button.styles";
import { IButtonProps } from "./Button.interface";

const Button: React.FC<IButtonProps> = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
);

export default Button;
