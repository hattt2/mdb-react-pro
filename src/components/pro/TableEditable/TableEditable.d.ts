import * as React from 'react';

declare class MDBTableEditable extends React.Component<
  {
    bordered?: boolean;
    className?: string;
    columns?: string[];
    children?: React.ReactNode;
    data?: (string | number)[][];
    hover?: boolean;
    responsive?: boolean;
    responsiveSm?: boolean;
    responsiveMd?: boolean;
    responsiveLg?: boolean;
    responsiveXl?: boolean;
    small?: boolean;
    striped?: boolean;
    getValue?: () => void;
    onChange?: () => void;
    [rest: string]: any;
  },
  any
> {}

export default MDBTableEditable;
