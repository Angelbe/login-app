import { Dispatch, SetStateAction } from "react";

export interface ISidebar {
  setCurrentLocation: Dispatch<SetStateAction<string>>;
}

export interface IHandleItemClick {
  name: string;
}

export type THandleItemClick = (param: IHandleItemClick) => void;
