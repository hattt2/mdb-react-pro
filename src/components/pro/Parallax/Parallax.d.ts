import * as React from 'react';
type StringFunction = () => string;

declare class MDBParallax extends React.Component<
  {
    alt?: string;
    className?: string;
    disableParallax?: () => void;
    disableVideo?: () => void;
    elementInViewport?: React.ReactNode;
    height?: string;
    image?: string;
    imgElement?: string;
    imgPosition?: string;
    imgRepeat?: string;
    imgSize?: string;
    keepImg?: boolean;
    speed?: React.ReactNode | string;
    tag?: StringFunction | string;
    threshold?: React.ReactNode;
    type?: string;
    videoEndTime?: number;
    videoLazyLoading?: boolean;
    videoLoop?: boolean;
    videoPlayOnlyVisible?: boolean;
    videoSrc?: string;
    videoStartTime?: number;
    videoVolume?: number;
    width?: string;
    zIndex?: number;
  },
  any
> {}

export default MDBParallax;
