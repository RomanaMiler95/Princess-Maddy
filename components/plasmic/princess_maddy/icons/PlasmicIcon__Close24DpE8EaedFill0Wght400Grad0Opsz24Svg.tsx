/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Close24DpE8EaedFill0Wght400Grad0Opsz24SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function Close24DpE8EaedFill0Wght400Grad0Opsz24SvgIcon(
  props: Close24DpE8EaedFill0Wght400Grad0Opsz24SvgIconProps
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
          "M480-424L284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424z"
        }
      ></path>
    </svg>
  );
}

export default Close24DpE8EaedFill0Wght400Grad0Opsz24SvgIcon;
/* prettier-ignore-end */
