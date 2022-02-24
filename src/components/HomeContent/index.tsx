import React from "react";
import { HomeContentStyled } from "./HomeContent.styles";
import Dashboard from "../Dashboard";
import Sidebar from "../Sidebar";
import { IHomeContent } from "./HomeContent.interface";
import Settings from "../Settings";

const HomeContent: React.FC<IHomeContent> = ({
  currentLocation,
  setCurrentLocation,
}) => {
  let ContentComponent = () => <Dashboard title={currentLocation} />;

  switch (currentLocation) {
    case "settings":
      ContentComponent = function createComponent() {
        return <Settings title={currentLocation} />;
      };
      break;
    default:
      break;
  }

  return (
    <HomeContentStyled>
      <Sidebar setCurrentLocation={setCurrentLocation} />
      <ContentComponent />
    </HomeContentStyled>
  );
};

export default HomeContent;
