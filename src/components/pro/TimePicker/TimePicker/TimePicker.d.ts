import * as React from "react";

declare const MDBTimePicker: React.FunctionComponent<{
  id: string;
  allowedValues?: number[];
  autoSwitch?: boolean;
  cancelable?: boolean;
  cancelText?: string;
  clearable?: boolean;
  clearText?: string;
  closeOnCancel?: boolean;
  color?: string;
  doneText?: string;
  hours?: number;
  hoursFormat?: 12 | 24;
  label?:  string;
  minutes?: number;
  placeholder?: string;
  startFromInner?: boolean;
  getValue?: (value: string) => void;
  [rest: string]: any;
}>;

export default MDBTimePicker;
