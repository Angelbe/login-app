import React from "react";
import {
  ContentTextContainer,
  ContentContainer,
  ContentTitleContainer,
} from "./Dashboard.styles";

interface IDashboard {
  title: string;
}

const Dashboard: React.FC<IDashboard> = ({ title }) => (
  <ContentContainer>
    <ContentTitleContainer>{title}</ContentTitleContainer>
    <ContentTextContainer>Dashboard</ContentTextContainer>
  </ContentContainer>
);

export default Dashboard;
