import { Dispatch, SetStateAction } from "react";

export enum EHomeContentLocation {
  dashboard = "dashboard",
  settings = "settings",
}

export interface IHomeContent {
  currentLocation: string;
  setCurrentLocation: Dispatch<SetStateAction<string>>;
}
