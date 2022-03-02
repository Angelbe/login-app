import { EUserKeys } from "src/interfaces/user.interface";
import { IInputListItem } from "./Settings.interface";

export const editInputs: IInputListItem[] = [
  {
    key: EUserKeys.name,
    title: "Name*",
    placeholder: "Don't forget your name",
  },
  {
    key: EUserKeys.location,
    title: "Location*",
    placeholder: "Don't forget your location",
  },
  {
    key: EUserKeys.genre,
    title: "Genre*",
    placeholder: "Don't forget your genre",
  },
];
