import React from "react";
import Input from "src/components/Input";
import { IFormInput } from "./InputWithTitle.interface";
import {
  InputWithTitleContainer,
  TitleContainer,
} from "./InputWithTitle.styles";

const InputWithTitle: React.FC<IFormInput> = ({ title, ...props }) => (
  <InputWithTitleContainer>
    <TitleContainer>{title}</TitleContainer>
    <Input {...props} />
  </InputWithTitleContainer>
);

export default InputWithTitle;
