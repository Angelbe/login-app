import React from "react";
import Compas from "styles/svg/compass.svg";
import Cog from "styles/svg/cog.svg";

export const sidebarNavList = [
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
