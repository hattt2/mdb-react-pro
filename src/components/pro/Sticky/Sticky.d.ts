import * as React from "react";

declare class MDBSticky extends React.Component<
  {
    bottomOffset?: number;
    children: React.ReactNode;
    disableCompensation?: boolean;
    disableHardwareAcceleration?: boolean;
    relative?: boolean;
    topOffset?: number;
    [rest: string]: any;
  },
  any
> {}

export default MDBSticky;
