import * as React from "react";

declare class MDBChipsInput extends React.Component<{
  className?: string;
  placeholder?: string;
  secondaryPlaceholder?: string;
  chips?: [];
  chipSize?: string;
  chipColor?: string;
  chipText?: string;
  chipGradient?: string;
  tag?: string;
  [rest: string]: any;
}, any> {}

export default MDBChipsInput;
