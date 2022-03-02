import React, { useState } from "react";
import Popup from "reactjs-popup";
import InputWithTitle from "src/components/InputWithTitle";
import { ButtonContainer } from "src/components/Settings/Settings.styles";
import Button from "src/components/Button";
import { IUser } from "src/interfaces/user.interface";
import { emptyUser } from "src/features/user";
import { IPopupFormUser } from "./PopupFormUser.interface";

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

  return (
    <Popup open={open} closeOnDocumentClick onClose={() => setOpen(false)}>
      <h3>{popupTitle}</h3>
      <form
        onSubmit={(event) => handleSave({ event, userFromPopup: userEdited })}
        className="modal"
      >
        {inputsList.map(({ key, title }) => (
          <InputWithTitle
            key={key}
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
          <Button type="button" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button type="submit" isLoading={isLoading}>
            Save
          </Button>
        </ButtonContainer>
      </form>
    </Popup>
  );
};

export default PopupFormUser;
