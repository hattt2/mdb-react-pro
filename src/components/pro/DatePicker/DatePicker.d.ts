import * as React from "react";

declare class MDBDatePicker extends React.Component<{
  adornmentPosition?: string;
  allowKeyboardControl?: boolean;
  animateYearScrolling?: boolean;
  autoOk?: boolean;
  className?: string;
  cancelLabel?: React.ReactNode;
  clearable?: boolean;
  clearLabel?: React.ReactNode;
  disableFuture?: object;
  disableOpenOnEnter?: boolean;
  disablePast?: boolean;
  emptyLabel?: string;
  format?: string;
  initialFocusedDate?: string;
  InputAdornmentProps?: object;
  invalidDateMessage?: React.ReactNode;
  invalidLabel?: string;
  keyboard?: boolean;
  keyboardIcon?: React.ReactNode;
  leftArrowIcon?: React.ReactNode;
  mask?: any;
  maxDate?: string;
  maxDateMessage?: React.ReactNode;
  minDate?: string;
  minDateMessage?: React.ReactNode;
  okLabel?: React.ReactNode;
  openToYearSelection?: boolean;
  rightArrowIcon?: React.ReactNode;
  showTodayButton?: boolean;
  TextFieldComponent?: string;
  todayLabel?: string;
  locale?: string;
  theme?: object;
  tag?: string;
  value?: Date;
  valueDefault?: Date
  onInputChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  getValue?: (value: Date) => void
  [rest: string]: any;
}, any> {}

export default MDBDatePicker;
