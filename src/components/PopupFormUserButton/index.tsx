import React from "react";
import Button from "src/components/Button";
import PopupFormUser from "src/components/PopupFormUser";
import { IPopupFormUserButton } from "./PopupFormUserButton.interface";

const PopupFormUserButton: React.FC<IPopupFormUserButton> = ({
  buttonText,
  setOpen,
  ...props
}) => (
  <>
    <Button onClick={() => setOpen(true)} type="button">
      {buttonText}
    </Button>
    <PopupFormUser setOpen={setOpen} {...props} />
  </>
);

export default PopupFormUserButton;
