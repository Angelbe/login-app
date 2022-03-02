import React from "react";
import Button from "src/components/Button";
import PopupFormUser from "src/components/PopupFormUser";
import { IPopupFormUserButton } from "./PopupFormUserButton.interface";

const PopupFormUserButton: React.FC<IPopupFormUserButton> = ({
  user,
  handleSave,
  inputsList,
  open,
  setOpen,
}) => (
  <>
    <Button onClick={() => setOpen(true)}>Edit user</Button>
    <PopupFormUser
      user={user}
      inputsList={inputsList}
      handleSave={handleSave}
      open={open}
      setOpen={setOpen}
    />
  </>
);

export default PopupFormUserButton;
