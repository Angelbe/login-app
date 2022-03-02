import { theme } from "styles/theme";
import styled from "styled-components";

const InputStyled = styled.input`
  border: 0;
  border-bottom: 1px solid;
  padding: 10px 5px;
  border-radius: 5px 5px 0 0;
  border-color: ${theme.secundaryColor};
  color: ${theme.secundaryColor};
  background-color: ${theme.mainColorlighter};
  outline: none;

  ::placeholder {
    color: #b8b0b0;
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
`;

export { InputStyled };
