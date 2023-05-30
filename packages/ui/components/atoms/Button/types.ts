import { ButtonHTMLAttributes } from "react";

export interface ButtonBaseProps {
  label?: string;
  className?: string;
}

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "prefix"
> &
  ButtonBaseProps;
