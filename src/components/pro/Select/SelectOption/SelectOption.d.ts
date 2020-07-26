import * as React from "react";

declare class MDBSelectOption extends React.Component<
  {
    children?: React.ReactNode,
    checked?: boolean,
    className?: string,
    disabled?: boolean,
    icon?: string,
    value?: string | number,
    separator?: boolean
    triggerOptionClick?: () => void,
    [rest: string]: any;
  },
  any
> {}

export default MDBSelectOption;
