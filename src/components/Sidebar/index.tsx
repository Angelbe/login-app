import React, { useState } from "react";
import { SidebarContainerStyled, SidebarItem } from "./Sidebar.styles";
import { ISidebar, THandleItemClick } from "./Sidebar.interface";
import { sidebarNavList } from "./Sidebar.variables";

const Sidebar: React.FC<ISidebar> = ({ setCurrentLocation }) => {
  const [itemSelected, setItemSelected] = useState<string>(
    sidebarNavList[0].name
  );

  const handleItemClick: THandleItemClick = ({ name }) => {
    setCurrentLocation(name);
    setItemSelected(name);
  };

  return (
    <SidebarContainerStyled>
      {sidebarNavList.map(({ name, icon, label }) => (
        <SidebarItem
          key={name}
          onClick={() => handleItemClick({ name })}
          selected={itemSelected === name}
        >
          {icon}
          <div>{label}</div>
        </SidebarItem>
      ))}
    </SidebarContainerStyled>
  );
};

export default Sidebar;
