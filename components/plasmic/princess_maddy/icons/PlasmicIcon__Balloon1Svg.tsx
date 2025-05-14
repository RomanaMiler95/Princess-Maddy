/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Balloon1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Balloon1SvgIcon(props: Balloon1SvgIconProps) {
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
        d={
          "M401.517 35.496C284.484-16.986 151.282 27.941 90.47 163.551c-52.534 117.148-33.805 263.58 47.699 335.13-16.21 6.33-29.027 16.894-19.411 34.222 16.24 29.267 87.222 62.017 97.975 50.62 11.176-11.846 13.625-28.631 11.995-43.51 108.46 14.794 232.674-68.478 285.558-186.41 60.812-135.61 4.265-265.625-112.769-318.107z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Balloon1SvgIcon;
/* prettier-ignore-end */
