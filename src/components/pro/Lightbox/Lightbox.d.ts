import * as React from "react";

declare class MDBLightbox extends React.Component<{
  images: [],
  itemClassName?: string,
  descriptionClasses?: string,
  noMargins?: boolean,
  marginSpace?: number,
  lg?: string,
  md?: string,
  sm?: string,
  size?: string,
  xl?: string,
  xs?: string,
  tag?: string;
  transition?: number
  [rest: string]: any;
}, any> {}

export default MDBLightbox;
