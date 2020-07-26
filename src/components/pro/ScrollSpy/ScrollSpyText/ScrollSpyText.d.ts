import * as React from "react";

declare const MDBScrollSpyText: React.FunctionComponent<{
  className?: string;
  children?: React.ReactNode;
  scrollSpyRef?: ((ref: React.RefObject<HTMLElement>) => void) | React.RefObject<HTMLElement> | null;
  [rest: string]: any;
}>

export default MDBScrollSpyText;