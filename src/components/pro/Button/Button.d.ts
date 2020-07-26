import * as React from "react";
import { TypesFree } from "../../Button";
import { gradientType } from '../../../types'

interface TypesPro extends TypesFree, gradientType {
  flat?: boolean;
  floating?: boolean;
  outline?: boolean;
  rounded?: boolean;
}

declare const MDBBtn: React.FunctionComponent<TypesPro>

export default MDBBtn;
