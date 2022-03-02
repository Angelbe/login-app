import React, { useState } from "react";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import InputWithTitle from "src/components/InputWithTitle";
import Button from "src/components/Button";
import { getUser } from "src/services/user.service";
import { useAppDispatch } from "src/hooks";
import { setUser } from "src/features/user";
import { confirmLoggedIn } from "src/helpers/user.helpers";
import { ToastContainer, toast } from "react-toastify";
import { EGetUser, IGetUser } from "src/interfaces/user.interface";
import {
  LoginButtonsContainer,
  LoginFormContainer,
  LoginInputsContainer,
  TitleFormContainer,
} from "./LoginForm.styles";
import { THandleSubmit } from "./LoginForm.interface";
import { loginInputs } from "./LoginFormVariables.variables";

const initialLoginData: IGetUser = {
  [EGetUser.userName]: "",
  [EGetUser.password]: "",
};

const LoginForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loginData, setLoginData] = useState<IGetUser>(initialLoginData);

  const handleSubmit: THandleSubmit = async (event) => {
    event.preventDefault();
    const user = await getUser(loginData);
    const doesUserExist = confirmLoggedIn(user);

    if (doesUserExist) {
      dispatch(setUser(user));
      router.push("/home");
    } else {
      toast.error("User does not exist", {
        autoClose: 5000,
        closeOnClick: true,
      });
    }
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit}>
      <TitleFormContainer>Log in</TitleFormContainer>
      <LoginInputsContainer>
        {loginInputs.map(({ key, title, type }) => (
          <InputWithTitle
            key={key}
            title={title}
            type={type}
            value={loginData[key]}
            onChange={(event) =>
              setLoginData((prevData) => ({
                ...prevData,
                [key]: event.target.value,
              }))
            }
          />
        ))}
      </LoginInputsContainer>
      <LoginButtonsContainer>
        <Button type="submit">
          Enter
          <ToastContainer />
        </Button>
      </LoginButtonsContainer>
    </LoginFormContainer>
  );
};

export default LoginForm;
