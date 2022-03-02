import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
`;

export const DashboardTitle = styled.div`
  color: white;
  text-transform: capitalize;
  font-weight: bold;
  padding: 25px;
  background-color: ${({ theme }) => theme.secundaryColorLighter}; ;
`;

export const DashboardContent = styled.div`
  padding: 25px;
`;
