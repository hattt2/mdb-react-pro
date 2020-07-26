import * as React from "react";

declare class MDBSelectOptions extends React.Component<
  {
    children?: React.ReactNode,
    className?: string,
    search?: boolean,
    searchLabel?: string,
    searchId?: string
    [rest: string]: any;
  },
  any
> {}

export default MDBSelectOptions;
