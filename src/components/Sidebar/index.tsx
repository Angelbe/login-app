import React from "react";
import { SidebarContainerStyled, SidebarItem } from "./Sidebar.styles";
import { ISidebar } from "./Sidebar.interfaces";
import { sidebarNavList } from "./Sidebar.variables";

const Sidebar: React.FC<ISidebar> = ({ setCurrentLocation }) => (
  <SidebarContainerStyled>
    {sidebarNavList.map(({ name, icon, label }) => (
      <SidebarItem key={name} onClick={() => setCurrentLocation(name)}>
        {icon}
        <div>{label}</div>
      </SidebarItem>
    ))}
  </SidebarContainerStyled>
);

export default Sidebar;
