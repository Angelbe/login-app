import { EUserKeys } from "src/interfaces/user.interface";

interface IRegisterInput {
  key: EUserKeys;
  title: string;
  placeholder?: string;
}

export const registerInputs: IRegisterInput[] = [
  {
    key: EUserKeys.name,
    title: "Tell us your name?*",
    placeholder: "Enter your name",
  },
  {
    key: EUserKeys.password,
    title: "Which password will you use?*",
    placeholder: "Enter your password",
  },
  {
    key: EUserKeys.genre,
    title: "Which genre are you?",
    placeholder: "Enter your genre",
  },
  {
    key: EUserKeys.location,
    title: "Where do you Live?*",
    placeholder: "Enter your location",
  },
];
