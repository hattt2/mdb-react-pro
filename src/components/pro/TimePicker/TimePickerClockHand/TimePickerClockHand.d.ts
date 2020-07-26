import * as React from "react";

declare const MDBTimePickerClockHand: React.FunctionComponent<{
  cancelable: boolean;
  cancelText: string;
  clearable: boolean;
  clearText: string;
  doneText: string;
  handleCancelClick: () => void;
  handleClearClick: () => void;
  handleDoneClick: () => void;
}>;

export default MDBTimePickerClockHand;
