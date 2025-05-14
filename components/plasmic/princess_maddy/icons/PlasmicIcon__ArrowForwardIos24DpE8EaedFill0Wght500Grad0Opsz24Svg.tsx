/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowForwardIos24DpE8EaedFill0Wght500Grad0Opsz24SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ArrowForwardIos24DpE8EaedFill0Wght500Grad0Opsz24SvgIcon(
  props: ArrowForwardIos24DpE8EaedFill0Wght500Grad0Opsz24SvgIconProps
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
          "M571.35-480L281.17-770.17q-16.43-16.44-16.05-39.21.38-22.77 16.81-39.21 16.44-16.43 39.33-16.43 22.89 0 39.33 16.43L664-544.65q13.67 13.67 20.39 30.58 6.72 16.92 6.72 34.07t-6.72 34.07q-6.72 16.91-20.39 30.58L359.83-111.17Q343.39-94.74 321-95.24q-22.39-.5-38.83-16.93-16.43-16.44-16.43-39.33 0-22.89 16.43-39.33L571.35-480z"
        }
      ></path>
    </svg>
  );
}

export default ArrowForwardIos24DpE8EaedFill0Wght500Grad0Opsz24SvgIcon;
/* prettier-ignore-end */
