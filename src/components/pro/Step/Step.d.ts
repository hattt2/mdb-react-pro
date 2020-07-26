import * as React from "react";

declare const MDBStep: React.FunctionComponent<{
  form?: boolean;
  tag?: string;
  icon?: string; 
  iconClass?: string;
  stepName?: string;
  vertical?: boolean;
  [rest: string]: any;
}>;

export default MDBStep;
