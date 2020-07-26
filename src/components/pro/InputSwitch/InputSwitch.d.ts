import * as React from "react";

declare class MDBInputSwitch extends React.Component<{
  className?: string;
  disabled?: boolean,
  checked?: boolean,
  labelLeft?: string;
  labelRight?: string;
  getValue?: (value: boolean) => void;
  onChange?: () => void;
  [rest: string]: any;
}, any> {}

export default MDBInputSwitch;
