import * as React from "react";

declare const MDBCollapseHeader: React.FunctionComponent<{
  className?: string;
  children?: React.ReactNode;
  tag?: string;
  tagClassName?: string;
  triggerOnClick?: () => void;
  [rest: string]: any;
}>;

export default MDBCollapseHeader;
