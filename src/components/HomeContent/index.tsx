import React from "react";
import Dashboard from "src/components/Dashboard";
import Sidebar from "src/components/Sidebar";
import Settings from "src/components/Settings";
import { EHomeContentLocation, IHomeContent } from "./HomeContent.interface";
import { HomeContentStyled } from "./HomeContent.styles";

const HomeContent: React.FC<IHomeContent> = ({
  currentLocation,
  setCurrentLocation,
}) => {
  let ContentComponent = () => <Dashboard title={currentLocation} />;

  switch (currentLocation) {
    case EHomeContentLocation.settings:
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
