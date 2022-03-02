import React from "react";
import { Spinner } from "src/components/Spinner";
import { ButtonStyled, ChildrenContainer } from "./Button.styles";
import { IButtonProps } from "./Button.interface";

const Button: React.FC<IButtonProps> = ({ children, isLoading, ...props }) => (
  <ButtonStyled {...props}>
    <Spinner isLoading={isLoading} width="20px" height="20px" />
    <ChildrenContainer isLoading={isLoading}>{children}</ChildrenContainer>
  </ButtonStyled>
);

export default Button;
