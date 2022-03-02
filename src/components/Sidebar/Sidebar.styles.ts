import styled from "styled-components";
import { ISidebarItem } from "./Sidebar.interface";

export const SidebarContainerStyled = styled.div`
  z-index: 10;
  padding: 15px;
  border-right: 1px solid #cfcfcf;
  box-shadow: -5px 0 40px -2px #bebdbd;
`;

export const SidebarItem = styled.button<ISidebarItem>`
  padding: 15px;
  cursor: pointer;
  display: flex;
  min-width: 150px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border: ${({ selected }) => (selected ? "1px solid black" : 0)};
  border-radius: 10px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.secundaryColorLight : ""};

  :hover {
    background-color: ${({ theme }) => theme.secundaryColorLight};
  }
`;
