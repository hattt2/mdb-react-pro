import * as React from "react";

declare class MDBSideNavCat extends React.Component<{
  disabled?: boolean,
  children?: React.ReactNode,
  className?: string,
  icon?: string,
  iconBrand?: boolean,
  iconLight?: boolean,
  iconRegular?: boolean,
  iconSize?: string,
  id?: string,
  isOpen?: boolean,
  isOpenID?: string,
  name?: string,
  tag?: string
  onClick?: () => void,
  [rest: string]: any;
}, any> {}

export default MDBSideNavCat;
