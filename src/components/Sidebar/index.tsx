import React, { Dispatch, SetStateAction } from "react";
import Compas from "styles/svg/compass.svg";
import Cog from "styles/svg/cog.svg";
import { SidebarContainerStyled, SidebarItem } from "./Sidebar.Styles";

interface ISidebar {
  setCurrentLocation: Dispatch<SetStateAction<string>>;
}

const Sidebar: React.FC<ISidebar> = ({ setCurrentLocation }) => {
  return (
    <SidebarContainerStyled>
      <SidebarItem onClick={() => setCurrentLocation("dashboard")}>
        <Compas fill="#798181" />
        <div>Dashboard</div>
      </SidebarItem>
      <SidebarItem onClick={() => setCurrentLocation("settings")}>
        <Cog fill="#798181" />
        <div>Settings</div>
      </SidebarItem>
    </SidebarContainerStyled>
  );
};

export default Sidebar;
