import React, { useState } from "react";
import { useRouter } from "next/router";
import FormInput from "src/components/FormInput";
import Button from "src/components/Button";
import { getUser } from "src/services/user.service";
import { useAppDispatch } from "src/hooks";
import { setUser } from "src/features/user";
import {
  LoginButtonsContainer,
  LoginFormContainer,
  LoginInputsContainer,
  TitleFormContainer,
} from "./LoginForm.styles";
import { THandleSubmit } from "./LoginForm.interfaces";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit: THandleSubmit = async (event) => {
    event.preventDefault();
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
        <FormInput
          onChange={(event) => setUserName(event.target.value)}
          name="user"
          title="Username"
        />
        <FormInput
          onChange={(event) => setPassword(event.target.value)}
          name="password"
          title="Password"
          type="password"
        />
      </LoginInputsContainer>
      <LoginButtonsContainer>
        <Button>enter</Button>
      </LoginButtonsContainer>
    </LoginFormContainer>
  );
};

export default LoginForm;
