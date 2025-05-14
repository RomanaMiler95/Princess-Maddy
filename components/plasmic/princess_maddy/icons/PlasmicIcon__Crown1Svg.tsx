/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Crown1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Crown1SvgIcon(props: Crown1SvgIconProps) {
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
          "M416.123 526.44l170.864-237.134-205.557 20.048-10.098-220.362L196.934 219.93 91.639 73.56 13.013 345.49l403.11 180.95z"
        }
      ></path>
    </svg>
  );
}

export default Crown1SvgIcon;
/* prettier-ignore-end */
