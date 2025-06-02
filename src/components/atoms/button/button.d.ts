import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

import { TSize } from "../loader/loader";

export type ButtonProps = DetailedHTMLProps<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
  HTMLButtonElement
>;

export type TButtonType =
  | "primary"
  | "outline-primary"
  | "outline-warning"
  | "danger"
  | "outline-danger"
  | "success"
  | "warning"
  | "orange"
  | "secondary"
  | "secondary-100"
  | "info"
  | "transparent"
  | "disabled"
  | "light"
  | "selected"
  | "purple"
  | "transparent-primary"
  | "outline-white"
  | "gold";

export interface ButtonDefaultProps {
  iconPosition?: "right" | "left";
  icon?: ReactNode | string;
  btnType?: "button" | "reset" | "submit";
  iconType?: "string" | "image";
  type: TButtonType;
  isSubmit?: boolean;
  iconHeight?: number;
  iconWidth?: number;
  iconClassName?: string;
  isDisable?: boolean;
  label: string | ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  id?: string;
  size?: TSize;
}
