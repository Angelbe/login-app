import React from "react";
import { InputStyled } from "src/components/Input/Input.styles";
import { IInput } from "./input.interface";

const Input: React.FC<IInput> = ({ ...props }) => <InputStyled {...props} />;

export default Input;
