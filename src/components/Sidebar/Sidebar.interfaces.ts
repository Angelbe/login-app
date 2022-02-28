import { Dispatch, SetStateAction } from "react";

export interface ISidebar {
  setCurrentLocation: Dispatch<SetStateAction<string>>;
}
