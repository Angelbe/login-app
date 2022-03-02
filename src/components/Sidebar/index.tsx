import React, { useState } from "react";
import { useRouter } from "next/router";
import { emptyUser, setUser } from "src/features/user";
import { useAppDispatch } from "src/hooks";
import { SidebarContainerStyled, SidebarItem } from "./Sidebar.styles";
import { ISidebar, THandleItemClick } from "./Sidebar.interface";
import { logoutNav, sidebarNavList } from "./Sidebar.variables";

const Sidebar: React.FC<ISidebar> = ({ setCurrentLocation }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [itemSelected, setItemSelected] = useState<string>(
    sidebarNavList[0].name
  );

  const handleItemClick: THandleItemClick = ({ name }) => {
    setCurrentLocation(name);
    setItemSelected(name);
  };

  const handleLogoutClick = () => {
    dispatch(setUser(emptyUser));
    router.push("/login");
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
      <SidebarItem key={"logout"} onClick={handleLogoutClick} selected={false}>
        {logoutNav.icon}
        <div>{logoutNav.label}</div>
      </SidebarItem>
    </SidebarContainerStyled>
  );
};

export default Sidebar;
