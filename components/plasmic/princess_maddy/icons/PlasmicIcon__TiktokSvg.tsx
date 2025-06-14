/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TiktokSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TiktokSvgIcon(props: TiktokSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#a)"}>
        <path
          fill={"#427AC4"}
          d={
            "M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0m128.43 195.873v34.663c-16.345.006-32.226-3.197-47.204-9.516a120.6 120.6 0 0 1-26.811-15.636l.246 106.693c-.103 24.025-9.608 46.598-26.811 63.601-14 13.84-31.74 22.641-50.968 25.49a94 94 0 0 1-13.766 1.012c-20.583 0-40.124-6.668-56.109-18.97a93 93 0 0 1-8.624-7.532c-18.644-18.427-28.258-43.401-26.639-69.674 1.235-19.999 9.242-39.072 22.59-54.021 17.66-19.782 42.366-30.762 68.782-30.762 4.65 0 9.248.349 13.766 1.018v48.468a43.4 43.4 0 0 0-13.623-2.19c-24.134 0-43.659 19.69-43.298 43.842.229 15.453 8.67 28.961 21.12 36.407a43 43 0 0 0 19.765 6.062 43.4 43.4 0 0 0 16.036-2.127c17.243-5.696 29.682-21.892 29.682-40.994l.057-71.447V109.82h47.736a74.3 74.3 0 0 0 1.418 13.817c3.603 18.101 13.806 33.805 28.006 44.511 12.382 9.339 27.8 14.875 44.511 14.875.011 0 .149 0 .137-.011z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"a"}>
          <path fill={"#fff"} d={"M0 0h512v512H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default TiktokSvgIcon;
/* prettier-ignore-end */
