import * as React from "react";

declare const MDBChip: React.FunctionComponent<{
  alt?: string;
  bgColor?: string;
  className?: string;
  close?: boolean;
  gradient?: string;
  size?: string;
  src?: string;
  tag?: string;
  text?: string;
  hadleClose?: () => void;
  [rest: string]: any;
}>;

export default MDBChip;
