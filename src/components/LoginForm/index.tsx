import React from "react";
import { useRouter } from "next/router";
import FormInput from "../FormInput";
import {
  LoginButtonsContainer,
  LoginFormContainer,
  LoginInputsContainer,
  TitleFormContainer,
} from "./LoginForm.styles";
import Button from "../Button";
import { THandleSubmit } from "./LoginForm.interfaces";
import { getUser } from "../../services/user";
import { useAppDispatch } from "../../hooks";
import { setUser } from "../../actions/user";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit: THandleSubmit = async (event) => {
    event.preventDefault();
    const userName: string = event.target[0].value;
    const password: string = event.target[1].value;
    const user = await getUser({ userName, password });
    const doesUserExist = typeof user === "object";

    if (doesUserExist) {
      dispatch(setUser(user));
      router.push("/home");
    }
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit}>
      <TitleFormContainer>Log in</TitleFormContainer>
      <LoginInputsContainer>
        <FormInput name="user" title="Username" />
        <FormInput name="password" type="password" title="Password" />
      </LoginInputsContainer>
      <LoginButtonsContainer>
        <Button type="submit">enter</Button>
      </LoginButtonsContainer>
    </LoginFormContainer>
  );
};

export default LoginForm;
