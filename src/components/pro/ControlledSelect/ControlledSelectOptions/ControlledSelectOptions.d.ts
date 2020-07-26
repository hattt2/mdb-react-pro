import * as React from "react";

declare const MDBControlledSelectOptions: React.FunctionComponent<{
  allChecked?: boolean,
  changeFocus?: () => void;
  focused?: number;
  focusShadow?: string;
  focusBackgroundColor?: string;
  inputRef?: React.RefObject<HTMLInputElement> | null;
  multiple?: boolean;
  options?: 
    {
      checked?: boolean;
      separator?: boolean;
      disabled?: boolean;
      icon?: string;
      image?: string;
      text?: object | string;
      value?: string
    }[];
  selected: string;
  selectOption: () => void;
  search?: boolean;
  searchLabel?: string;
  searchId?: string;
  selectAllClassName?: string;
  selectAllLabel?: string;
  selectAllValue?: string;
  setFilteredOptions?: () => void;
  [rest: string]: any;
}>;

export default MDBControlledSelectOptions;
