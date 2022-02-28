import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
`;

export const ContentTitleContainer = styled.div`
  color: white;
  text-transform: capitalize;
  font-weight: bold;
  padding: 25px;
  background-color: ${({ theme }) => theme.secundaryColorLighter};
`;

export const ContentTextContainer = styled.div`
  padding: 25px;
`;
