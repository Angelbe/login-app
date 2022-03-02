import React from "react";
import { IMain } from "./Main.interface";

const Main: React.FC<IMain> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export default Main;
