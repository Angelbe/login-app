import React from "react";
import { DisplayUserDataInterface } from "./DisplayUserData.interface";
import { DisplayUserDataContainer } from "./DisplayUserData.styles";

const DisplayUserData: React.FC<DisplayUserDataInterface> = ({ user }) => {
  const { name, genre, location } = user;
  return (
    <DisplayUserDataContainer>
      <h3>User Profile</h3>
      <div>Name: {name}</div>
      <div>Genre: {genre}</div>
      <div>Location: {location}</div>
    </DisplayUserDataContainer>
  );
};

export default DisplayUserData;
