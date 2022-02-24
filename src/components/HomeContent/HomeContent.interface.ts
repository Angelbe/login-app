import { Dispatch, SetStateAction } from "react";

export interface IHomeContent {
  currentLocation: string;
  setCurrentLocation: Dispatch<SetStateAction<string>>;
}
