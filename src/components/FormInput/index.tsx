import React from "react";
import Input from "src/components/Input";
import { IFormInput } from "./FormInput.interface";
import { TitleContainer } from "./FormInput.styles";

const FormInput: React.FC<IFormInput> = ({ title, ...props }) => (
  <div>
    <TitleContainer>{title}</TitleContainer>
    <Input {...props} />
  </div>
);

export default FormInput;
