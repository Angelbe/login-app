import React from "react";

interface IMain {
  className?: string;
}

const Main: React.FC<IMain> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export default Main;
