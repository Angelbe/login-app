import React from "react";
import {
  ContentTextContainer,
  ContentContainer,
  ContentTitleContainer,
} from "./Settings.styles";

interface ISettings {
  title: string;
}

const Settings: React.FC<ISettings> = ({ title }) => {
  return (
    <ContentContainer>
      <ContentTitleContainer>{title}</ContentTitleContainer>
      <ContentTextContainer>Settings</ContentTextContainer>
    </ContentContainer>
  );
};

export default Settings;
