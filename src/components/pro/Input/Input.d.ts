import * as React from "react";
import { TypesFree } from "../../Input/";

interface InputTypesPro extends TypesFree {
  counter?: boolean | number;
  getCounter?: (value:any) => void;
}

declare class MDBInput extends React.Component<InputTypesPro, any> {}

export default MDBInput;
