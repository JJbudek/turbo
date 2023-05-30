"use client";

import * as React from "react";
import "./button.css"
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <button
      className="button"
      {...rest}
    >
      {label}
    </button>
  );
};
