/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask1SvgIcon(props: Mask1SvgIconProps) {
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
          "M413.739 158.619c-42.97 23.395-70.362 62.666-75.829 102.111-2.09 15.08-12.035 27.566-25.822 34.025a59.802 59.802 0 00-6.359 3.461c-12.906 8.076-28.79 9.654-42.591 3.225-36.098-16.813-83.948-15.118-126.918 8.278-65.46 35.64-146.893 63.3-117.595 117.109 29.297 53.81 144.407 94.918 209.867 59.277 58.085-31.625 98.587-77.763 86.51-125.352-1.536-6.043.286-17.336 15.076-25.388 14.397-7.84 25.829-2.673 30.456 2.117 33.608 34.796 93.746 25.688 151.284-5.64 65.46-35.64 93.399-154.634 64.102-208.444-29.298-53.808-96.721-.42-162.181 35.22zM210.946 439c-45.686 24.875-106.646-6.834-115.771-23.594-9.126-16.76 28.609-42.499 62.864-61.15 34.292-18.67 78.265-12.211 87.41 4.585 9.125 16.76-.247 61.509-34.503 80.16zm270.83-147.458c-34.256 18.652-76.927 2.24-86.053-14.52-9.145-16.797 9.292-57.237 43.584-75.907 34.256-18.651 76.352-36.378 85.478-19.618 9.125 16.76 2.677 85.17-43.01 110.046z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask1SvgIcon;
/* prettier-ignore-end */
