import { EUserKeys } from "src/interfaces/user.interface";

interface IRegisterInput {
  key: EUserKeys;
  title: string;
}

export const registerInputs: IRegisterInput[] = [
  { key: EUserKeys.name, title: "Name" },
  { key: EUserKeys.password, title: "Password" },
  { key: EUserKeys.genre, title: "Genre" },
  { key: EUserKeys.location, title: "Location" },
];
