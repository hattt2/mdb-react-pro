import * as React from "react";

declare const MDBDataTableSelect: React.FunctionComponent<{
  barReverse?: boolean;
  entries: number[];
  label: string;
  value: string;
  onChange: () => void;
}>;

export default MDBDataTableSelect;
