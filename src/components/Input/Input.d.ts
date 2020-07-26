import * as React from "react";
import { classNameType, iconSize } from "../../types";

export interface TypesFree extends classNameType {
  background?: boolean;
  children?: React.ReactNode;
  checked?: boolean;
  containerClass?: string;
  disabled?: boolean;
  error?: string;
  filled?: boolean;
  gap?: boolean;
  group?: boolean;
  hint?: string;
  icon?: string;
  iconBrand?: boolean;
  iconClass?: string;
  iconLight?: boolean;
  iconRegular?: boolean;
  id?: string;
  iconSize?: iconSize;
  inputRef?:
    | React.RefObject<HTMLInputElement>
    | ((ref: React.RefObject<HTMLInputElement>) => void)
    | null;
  outline?: boolean;
  label?: string | boolean;
  labelClass?: string;
  labelId?: string;
  noTag?: boolean;
  size?: "sm" | "lg";
  success?: string;
  tag?: string;
  type?: string;
  validate?: boolean;
  value?: number | string;
  valueDefault?: number | string;
  getValue?: (value: number | string) => void;
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  onIconClick?: (e: React.SyntheticEvent<MouseEvent>) => void;
  onIconMouseEnter?: (e: React.SyntheticEvent<MouseEvent>) => void;
  onIconMouseLeave?: (e: React.SyntheticEvent<MouseEvent>) => void;
  [rest: string]: any;
}

declare class MDBInput extends React.Component<TypesFree, any> {}

export default MDBInput;
