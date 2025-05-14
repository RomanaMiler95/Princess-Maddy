/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Call24DpE8EaedFill1Wght400Grad0Opsz24SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function Call24DpE8EaedFill1Wght400Grad0Opsz24SvgIcon(
  props: Call24DpE8EaedFill1Wght400Grad0Opsz24SvgIconProps
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
          "M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12z"
        }
      ></path>
    </svg>
  );
}

export default Call24DpE8EaedFill1Wght400Grad0Opsz24SvgIcon;
/* prettier-ignore-end */
