import React, { MouseEvent } from "react";
import Link from "next/link";
import { NextRouter } from "next/router";
import { router } from "next/client";
import FormInput from "../FormInput";
import {
  LoginButtonsContainer,
  LoginFormContainer,
  LoginInputsContainer,
  TitleFormContainer,
} from "./LoginForm.styles";
import Button from "../Button";
import { THandleSubmit } from "./LoginForm.interfaces";

const LoginForm: React.FC = () => {
  const handleSubmit: THandleSubmit = ({ event }) => {
    event.preventDefault();
    router.push("/home");
  };

  return (
    <LoginFormContainer>
      <TitleFormContainer>Titulo</TitleFormContainer>
      <LoginInputsContainer>
        <FormInput Title="Username" />
        <FormInput type="password" Title="Password" />
      </LoginInputsContainer>
      <LoginButtonsContainer>
        <Button onClick={handleSubmit}>enter</Button>
      </LoginButtonsContainer>
    </LoginFormContainer>
  );
};

export default LoginForm;
