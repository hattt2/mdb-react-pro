import * as React from "react";

declare const MDBSpinner: React.FunctionComponent<{
  className?: string;
  big?: boolean;
  small?: boolean;
  crazy?: boolean;
  red?: boolean;
  green?: boolean;
  yellow?: boolean;
  multicolor?: boolean;
  tag?: string;
  [rest: string]: any;
}>;

export default MDBSpinner;
