import React from "react";
import { InputStyled } from "src/components/Input/Input.styles";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => <InputStyled {...props} />;

export default Input;
