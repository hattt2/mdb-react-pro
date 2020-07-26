import * as React from "react";

declare class MDBBtnFixed extends React.Component<{
  active?: boolean;
  block?: boolean;
  className?: string;
  color?: string;
  disabled?: boolean;
  flat?: boolean;
  floating?: boolean;
  gradient?:
    | "purple"
    | "blue"
    | "aqua"
    | "peach"
    | "warm-flame"
    | "night-fade"
    | "spring-warmth"
    | "juicy-peach"
    | "young-passion"
    | "rainy-ashville"
    | "sunny-morning"
    | "lady-lips"
    | "winter-neva"
    | "frozen-dreams"
    | "dusty-grass"
    | "tempting-azure"
    | "heavy-rain"
    | "amy-crisp"
    | "mean-fruit"
    | "deep-blue"
    | "ripe-malinka"
    | "cloudy-knoxville"
    | "morpheus-den"
    | "rare-wind"
    | "near-moon";
    icon?: string;
    iconBrand?: boolean;
    iconClassName?: string;
    iconLight?: boolean;
    iconRegular?: boolean;
    iconSize?: "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" |"10x";
    innerRef?: React.RefObject<HTMLButtonElement> | ((ref: React.RefObject<HTMLButtonElement>) => void) | null;
    outline?: boolean;
    role?: string;
    rounded?: boolean;
    size?: 'sm' | 'lg';
    topSection?: string;
    type?: 'reset' | 'submit' | 'button';
    [rest: string]: any;
}, any> {}

export default MDBBtnFixed;
