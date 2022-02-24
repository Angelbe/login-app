import React from "react";
import Input from "../Input";
import { IFormInput } from "./FormInput.interface";
import { TitleContainer } from "./FormInput.styles";

const FormInput: React.FC<IFormInput> = ({ Title, ...props }) => (
  <div>
    <TitleContainer>{Title}</TitleContainer>
    <Input {...props} />
  </div>
);

export default FormInput;
