import * as React from "react";

declare class MDBSideNav extends React.Component<{
  bg?: string;
  breakWidth?: number;
  children?: React.ReactNode;
  className?: string;
  hidden?: boolean;
  href?: string;
  logo?: string;
  mask?: ['slight', 'light', 'strong'];
  right?: boolean;
  triggerOpening?: boolean;
  tag?: string;
  fixed?: boolean;
  showOverlay?: boolean;
  responsive?: boolean;
  slim?: boolean
  onOverlayClick?: () => void;
  [rest: string]: any;
}, any> {}

export default MDBSideNav;
