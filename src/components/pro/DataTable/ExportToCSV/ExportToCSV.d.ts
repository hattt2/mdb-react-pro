import * as React from "react";

declare class MDBExportToCSV extends React.Component<
  {
    active?: boolean,
    block?: boolean,
    columns: object[],
    color?: string,
    circle?: boolean,
    children?: React.ReactNode,
    className?: string
    data: [],
    disabled?: boolean,
    floating?: boolean,
    flat?: boolean,
    gradient?: string,
    outline?: boolean,
    rounded?: boolean,
    size?: string,
    [rest: string]: any;
  },
  any
> {}

export default MDBExportToCSV;
