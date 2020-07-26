import * as React from "react";

declare class MDBPerfectScrollbar extends React.Component<{
  children?: React.ReactNode;
  className?: string;
  containerRef?: React.RefObject<HTMLElement> | ((ref: React.RefObject<HTMLElement>) => void) | null;
  onScrollY?: () => void;
  onScrollX?: () => void;
  onScrollUp?: () => void;
  onScrollDown?: () => void;
  onScrollLeft?: () => void;
  onScrollRight?: () => void;
  onYReachStart?: () => void;
  onYReachEnd?: () => void;
  onXReachStart?: () => void;
  onXReachEnd?: () => void
  [rest: string]: any;
}, any> {}

export default MDBPerfectScrollbar;
