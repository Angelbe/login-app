import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { selectUser, setUser } from "src/features/user";
import { updateUser } from "src/services/user.service";
import { IUser } from "src/interfaces/user.interface";
import PopupFormUserButton from "src/components/PopupFormUserButton";
import DisplayUserData from "src/components/DisplayUserData";
import {
  ContentTextContainer,
  ContentContainer,
  ContentTitleContainer,
} from "./Settings.styles";
import { ISettings, THandleSaveEdit } from "./Settings.interface";
import { editInputs } from "./Settings.variables";

const Settings: React.FC<ISettings> = ({ title }) => {
  const user: IUser = useAppSelector(selectUser);
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleSaveEdit: THandleSaveEdit = ({ event, userFromPopup }) => {
    event.preventDefault();
    setIsLoading(true);
    updateUser({ user: userFromPopup }).then(() => {
      dispatch(setUser(userFromPopup));
      setIsLoading(false);
      setOpen(false);
    });
  };

  return (
    <ContentContainer>
      <ContentTitleContainer>{title}</ContentTitleContainer>
      <ContentTextContainer>
        <DisplayUserData user={user} />
        <PopupFormUserButton
          user={user}
          handleSave={handleSaveEdit}
          inputsList={editInputs}
          open={open}
          setOpen={setOpen}
          buttonText="Edit User"
          popupTitle="Edit User"
          isLoading={isLoading}
        />
      </ContentTextContainer>
    </ContentContainer>
  );
};

export default Settings;
