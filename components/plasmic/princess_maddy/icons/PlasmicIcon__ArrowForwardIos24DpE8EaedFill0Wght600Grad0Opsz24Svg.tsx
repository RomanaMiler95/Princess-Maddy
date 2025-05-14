/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowForwardIos24DpE8EaedFill0Wght600Grad0Opsz24SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ArrowForwardIos24DpE8EaedFill0Wght600Grad0Opsz24SvgIcon(
  props: ArrowForwardIos24DpE8EaedFill0Wght600Grad0Opsz24SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -960 960 960"}
      fill={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M560.91-480L275.96-764.96q-18.4-18.39-18.18-44.26.22-25.87 18.61-44.26 18.39-18.39 44.54-18.39 26.16 0 44.55 18.39L664-555.09q15.96 15.96 23.65 35.48 7.7 19.52 7.7 39.61t-7.7 39.61q-7.69 19.52-23.65 35.48L365.04-105.96q-18.39 18.4-44.04 17.9t-44.04-18.9q-18.4-18.39-18.4-44.54t18.4-44.54L560.91-480z"
        }
      ></path>
    </svg>
  );
}

export default ArrowForwardIos24DpE8EaedFill0Wght600Grad0Opsz24SvgIcon;
/* prettier-ignore-end */
