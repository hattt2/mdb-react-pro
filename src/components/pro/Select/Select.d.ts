import * as React from "react";

declare class MDBSelect extends React.Component<
  {
    children?: React.ReactNode;
    className?: string;
    color?: string;
    focusShadow?: string;
    focusBackgroundColor?: string;
    label?: string;
    labelClass?: string;
    multiple?: boolean;
    options?: {
      checked?: boolean;
      disabled?: boolean;
      icon?: string;
      text?: string;
      value?: string;
    }[];
    outline?: boolean;
    required?: boolean;
    search?: boolean;
    searchLabel?: string;
    searchId?: string;
    selected?: string;
    selectAll?: boolean;
    selectAllClassName?: string;
    selectAllLabel?: string;
    selectAllValue?: string;
    getTextContent?: (value: string) => void;
    getValue?: (value: string[]) => void;
    [rest: string]: any;
  },
  any
> {}

export default MDBSelect;
