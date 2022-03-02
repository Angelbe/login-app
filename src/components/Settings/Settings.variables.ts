import { EUserKeys } from "src/interfaces/user.interface";
import { IInputListItem } from "./Settings.interface";

export const editInputs: IInputListItem[] = [
  { key: EUserKeys.name, title: "Name" },
  { key: EUserKeys.location, title: "Location" },
  { key: EUserKeys.genre, title: "Genre" },
];
