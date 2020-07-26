import * as React from "react";

declare class MDBInputRange extends React.Component<{
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  tag?: string;
  getValue?: () => void;
  [rest: string]: any;
}, any> {}

export default MDBInputRange;
