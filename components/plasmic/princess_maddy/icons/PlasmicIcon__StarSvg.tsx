/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarSvgIcon(props: StarSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      version={"1.1"}
      viewBox={"0 0 600 600"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M382.575 217.425L300 8.052l-82.575 209.373L8.053 299.999l209.372 82.576L300 591.948l82.575-209.373L591.947 300l-209.372-82.574z"
        }
      ></path>
    </svg>
  );
}

export default StarSvgIcon;
/* prettier-ignore-end */
