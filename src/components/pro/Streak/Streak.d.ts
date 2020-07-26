import * as React from "react";

declare const MDBStreak: React.FunctionComponent<{
  by?: string;
  byClass?: string;
  children?: React.ReactNode;
  size?: 'lg'| 'md';
  quoteClass?: string;
  overlayClass?: string;
  photo?: string;
  wrapperClass?: string;
  [rest: string]: any;
}>;

export default MDBStreak;
