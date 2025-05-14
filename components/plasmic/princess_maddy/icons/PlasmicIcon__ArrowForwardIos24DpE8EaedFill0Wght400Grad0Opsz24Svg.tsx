/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowForwardIos24DpE8EaedFill0Wght400Grad0Opsz24SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ArrowForwardIos24DpE8EaedFill0Wght400Grad0Opsz24SvgIcon(
  props: ArrowForwardIos24DpE8EaedFill0Wght400Grad0Opsz24SvgIconProps
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
          "M579-480L285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293z"
        }
      ></path>
    </svg>
  );
}

export default ArrowForwardIos24DpE8EaedFill0Wght400Grad0Opsz24SvgIcon;
/* prettier-ignore-end */
