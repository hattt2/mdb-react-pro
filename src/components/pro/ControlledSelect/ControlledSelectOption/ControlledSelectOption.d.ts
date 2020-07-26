import * as React from "react";

declare const MDBControlledSelectOption: React.FunctionComponent<{
  checked?: boolean;
  disabled?: boolean;
  focusShadow?: string;
  focusBackgroundColor?: string;
  icon?: string;
  isFocused?: boolean;
  multiple?: boolean;
  selectAllClassName?: string;
  separator?: boolean;
  text?: object | string;
  value?: string;
  selectOption?: () => void;
  [rest: string]: any;
}>;

export default MDBControlledSelectOption;
