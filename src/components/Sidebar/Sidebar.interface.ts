import { Dispatch, SetStateAction } from "react";

export interface ISidebar {
  setCurrentLocation: Dispatch<SetStateAction<string>>;
}

export interface IHandleItemClick {
  name: string;
}

export interface ISidebarNav {
  name: string;
  icon: React.ReactNode;
  label: string;
}

export interface ISidebarItem {
  selected: boolean;
}

export type THandleItemClick = (param: IHandleItemClick) => void;
