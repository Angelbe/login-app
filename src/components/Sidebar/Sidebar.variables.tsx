import React from "react";
import Compas from "styles/svg/compass.svg";
import Cog from "styles/svg/cog.svg";
import Door from "styles/svg/door.svg";
import { ISidebarNav } from "./Sidebar.interface";

export const sidebarNavList: ISidebarNav[] = [
  {
    name: "dashboard",
    icon: <Compas fill="#798181" />,
    label: "Dashboard",
  },
  {
    name: "settings",
    icon: <Cog fill="#798181" />,
    label: "Settings",
  },
];

export const logoutNav: ISidebarNav = {
  name: "login",
  icon: <Door fill="#798181" />,
  label: "Logout",
};
