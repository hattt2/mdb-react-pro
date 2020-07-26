import * as React from "react";

declare const MDBTimePickerClock: React.FunctionComponent<{
  className: string;
  max: number;
  min: number;
  rotate: number;
  step: number;
  startFromInner: boolean;
  allowedValues?: number[];
  autoSwitch?: boolean;
  color?: string;
  double?: boolean;
  size?: number;
  value?: number;
  handleChange: () => void;
  handleModeChange?: () => void;
}>;

export default MDBTimePickerClock;
