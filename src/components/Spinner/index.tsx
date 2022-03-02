import styled from "styled-components";
import { spin } from "styles/animations";

interface ISpinner {
  width: string;
  height: string;
  isLoading?: boolean;
}

export const Spinner = styled.div<ISpinner>`
  border: 0.2em solid;
  border-color: ${({ theme }) => theme.secundaryColor};
  border-top: 0.2em solid;
  border-top-color: ${({ theme }) => theme.mainColor};
  border-radius: 50%;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  animation: ${spin} 0.6s linear infinite;
  position: absolute;
  visibility: ${({ isLoading }) => (isLoading ? "visible" : "hidden")};
  top: 30%;
  left: 35%; ;
`;
