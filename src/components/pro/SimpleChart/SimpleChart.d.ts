import * as React from "react";

declare const MDBSimpleChart: React.FunctionComponent<{
  endAngle?: number;
  fillColor?: string;
  height?: number;
  labelColor?: string;
  labelFontWeight?: string;
  labelFontSize?: string;
  percent?: number;
  padding?: number;
  radius?: number;
  railColor? : string;
  startAngle?: number;
  strokeWidth?: number;
  strokeColor?: string;
  style?: object;
  width?: number;
  [rest: string]: any;
}>;

export default MDBSimpleChart;
