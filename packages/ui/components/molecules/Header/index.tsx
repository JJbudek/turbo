import * as React from "react";
import { HeaderProps } from "./types";
import "./header.css"

export const Header: React.FC<HeaderProps> = ({title}) => (
  <nav className="header">
    <h1>{title}</h1>
  </nav>
);
