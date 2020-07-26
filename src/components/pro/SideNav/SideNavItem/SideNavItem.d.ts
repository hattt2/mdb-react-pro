import * as React from "react";

declare const MDBSideNavItem: React.FunctionComponent<{
  className?: string;
  children?: React.ReactNode;
  innerRef?: ((innerRef: React.RefObject<HTMLElement>) => void) | React.RefObject<HTMLElement> | string | null;
  href?: string;
  tag?: string;
  [rest: string]: any;
}>

export default MDBSideNavItem;
