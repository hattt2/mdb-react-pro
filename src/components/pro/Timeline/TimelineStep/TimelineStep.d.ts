import * as React from "react";

declare const MDBTimelineStep: React.FunctionComponent<{
  className?: string,
  color?: string,
  colorful?: boolean;
  children?: React.ReactNode;
  hoverable?: boolean;
  href?: string,
  size?: string,
  inverted?: boolean;
  icon?: string,
  iconBrand?: boolean,
  iconClass?: string,
  iconLight?: boolean,
  iconRegular?: boolean,
  iconSize?: "lg" | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  label?: string;
  [rest: string]: any;
}>;

export default MDBTimelineStep;
