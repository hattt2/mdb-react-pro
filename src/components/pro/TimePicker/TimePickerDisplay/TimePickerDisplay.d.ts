import * as React from "react";

declare const MDBTimePickerDisplay: React.FunctionComponent<{
  color: string;
  hours: string;
  minutes: string;
  dayTime: string;
  unitsMode: string;
  hoursFormat: number
  handleModeChange: () => void;
}>;

export default MDBTimePickerDisplay;
