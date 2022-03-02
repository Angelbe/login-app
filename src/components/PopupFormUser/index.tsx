import React, { useState } from "react";
import Popup from "reactjs-popup";
import InputWithTitle from "src/components/InputWithTitle";
import { ButtonContainer } from "src/components/Settings/Settings.styles";
import Button from "src/components/Button";
import { EUserKeys, IUser } from "src/interfaces/user.interface";
import { emptyUser } from "src/features/user";
import { ETheme } from "src/interfaces/theme.interface";
import { IPopupFormUser, THandleSubmit } from "./PopupFormUser.interface";

const PopupFormUser: React.FC<IPopupFormUser> = ({
  open,
  setOpen,
  handleSave,
  user,
  inputsList,
  popupTitle,
  isLoading,
}) => {
  const [userEdited, setUserEdited] = useState<IUser>(user || emptyUser);
  const isFormFilled =
    userEdited[EUserKeys.genre].length > 0 &&
    userEdited[EUserKeys.location].length > 0 &&
    userEdited[EUserKeys.name].length > 0 &&
    userEdited[EUserKeys.genre].length > 0;

  const CloseModal = () => {
    setUserEdited(user || emptyUser);
    setOpen(false);
  };

  const handleSubmit: THandleSubmit = (event) => {
    if (isFormFilled) {
      setUserEdited(user || emptyUser);
      handleSave({ event, userFromPopup: userEdited });
    }
  };

  return (
    <Popup open={open} closeOnDocumentClick onClose={CloseModal}>
      <h3>{popupTitle}</h3>
      <form onSubmit={handleSubmit} className="modal">
        {inputsList.map(({ key, title, placeholder }) => (
          <InputWithTitle
            key={key}
            placeholder={placeholder}
            title={title}
            value={userEdited[key]}
            onChange={(event) =>
              setUserEdited((prevUser) => ({
                ...prevUser,
                [key]: event.target.value,
              }))
            }
          />
        ))}
        <ButtonContainer>
          <Button
            type="button"
            onClick={CloseModal}
            color={ETheme.secundaryColorLighter}
            bcolor={ETheme.mainColor}
          >
            Close
          </Button>
          <Button type="submit" isLoading={isLoading} disabled={!isFormFilled}>
            Save
          </Button>
        </ButtonContainer>
      </form>
    </Popup>
  );
};

export default PopupFormUser;
