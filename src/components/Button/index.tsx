import React from "react";
import { ButtonStyled } from "./Button.styles";
import { IButtonProps } from "./Button.interface";

// React.forwardRef is necessary with functional components inside Link
const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, ...props }, ref) => (
    <ButtonStyled {...props} ref={ref}>
      {children}
    </ButtonStyled>
  )
);
// property displayName is necessary for proper depuration when using forwardRef
Button.displayName = "Button";

export default Button;
