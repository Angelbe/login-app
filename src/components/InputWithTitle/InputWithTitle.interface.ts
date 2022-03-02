import React from "react";

export interface IFormInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}
