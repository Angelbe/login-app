import styled from "styled-components";
import { FormEventHandler } from "react";

interface ILoginFormContainer {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const LoginFormContainer = styled.form<ILoginFormContainer>`
  padding: 40px 90px;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-flow: column;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const LoginButtonsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const LoginInputsContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const TitleFormContainer = styled.h3`
  text-align: center;
`;
