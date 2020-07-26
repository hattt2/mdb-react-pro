import * as React from "react";

declare class MDBSideNavLink extends React.Component<{
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  innerRef?: ((innerRef: React.RefObject<HTMLElement>) => void) | React.RefObject<HTMLElement> | string | null;
  shortcut?: string;
  tag?: string;
  topLevel?: boolean;
  to?: string;
  [rest: string]: any;
}, any> {}

export default MDBSideNavLink;
