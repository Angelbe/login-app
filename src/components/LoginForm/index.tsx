import React, { useState } from "react";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import InputWithTitle from "src/components/InputWithTitle";
import Button from "src/components/Button";
import { getUser, registerUser } from "src/services/user.service";
import { useAppDispatch } from "src/hooks";
import { setUser } from "src/features/user";
import { confirmLoggedIn } from "src/helpers/user.helpers";
import { ToastContainer, toast } from "react-toastify";
import { EGetUser, IGetUser } from "src/interfaces/user.interface";
import PopupFormUserButton from "src/components/PopupFormUserButton";
import { THandleSaveEdit } from "src/components/Settings/Settings.interface";
import {
  LoginButtonsContainer,
  LoginInputContainer,
  LoginInputsContainer,
  TitleFormContainer,
  LoginFormContainer,
} from "./LoginForm.styles";
import { THandleSubmit } from "./LoginForm.interface";
import { loginInputs } from "./LoginFormVariables.variables";
import { registerInputs } from "./LoginForm.variables";

const initialLoginData: IGetUser = {
  [EGetUser.userName]: "",
  [EGetUser.password]: "",
};

const LoginForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loginData, setLoginData] = useState<IGetUser>(initialLoginData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const isFormFilled =
    loginData[EGetUser.userName].length > 0 &&
    loginData[EGetUser.password].length > 0;

  const handleSubmit: THandleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
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
    setIsLoading(false);
  };

  const handleSaveRegister: THandleSaveEdit = ({ event, userFromPopup }) => {
    event.preventDefault();
    registerUser({ user: userFromPopup });
    setOpen(false);
  };

  return (
    <LoginFormContainer>
      <LoginInputContainer id="loginForm" onSubmit={handleSubmit}>
        <TitleFormContainer>Log in</TitleFormContainer>
        <LoginInputsContainer>
          {loginInputs.map(({ key, title, type, placeholder }) => (
            <InputWithTitle
              key={key}
              title={title}
              type={type}
              placeholder={placeholder}
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
      </LoginInputContainer>
      <LoginButtonsContainer>
        <PopupFormUserButton
          handleSave={handleSaveRegister}
          inputsList={registerInputs}
          open={open}
          setOpen={setOpen}
          buttonText="Register"
          popupTitle="Register User"
        />
        <Button
          type="submit"
          disabled={!isFormFilled}
          form="loginForm"
          isLoading={isLoading}
        >
          Enter
          <ToastContainer />
        </Button>
      </LoginButtonsContainer>
    </LoginFormContainer>
  );
};

export default LoginForm;
