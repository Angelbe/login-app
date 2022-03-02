import styled from "styled-components";
import { ILoginInputContainer } from "./LoginForm.interface";

export const LoginFormContainer = styled.div`
  padding: 40px 90px;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-flow: column;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const LoginInputContainer = styled.form<ILoginInputContainer>`
  display: flex;
  flex-flow: column;
`;

export const LoginButtonsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const LoginInputsContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const TitleFormContainer = styled.h3`
  text-align: center;
`;
