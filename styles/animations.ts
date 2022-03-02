import { keyframes } from "styled-components";
import { theme } from "styles/theme";

export const blinkBetweenColors = keyframes`
  from {
    color:${theme.mainColor};
  }
  to {
    color:${theme.secundaryColor};
  }
`;

export const blinkBetweenBColors = keyframes`
  from {
    background-color:${theme.secundaryColor};
  }
  to {
    background-color:${"#ffa4cd"};
  }
`;

export const blinkBetweenBColorsSelected = keyframes`
  from {
    background-color:${theme.mainColor};
  }
  to {
    background-color:${theme.secundaryColorLighter};
  }
`;

export const spin = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;
