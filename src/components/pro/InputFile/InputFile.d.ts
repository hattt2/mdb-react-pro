import * as React from "react";

declare const MDBFileInput: React.FunctionComponent<{
  className?: string;
  btnTitle?: string;
  btnColor?: string;
  textFieldTitle?: string;
  multiple?: boolean;
  reset?: boolean;
  resetClassName?: string;
  resetAriaLabel?: string;
  reverse?: boolean;
  [rest: string]: any;
}>;

export default MDBFileInput;
