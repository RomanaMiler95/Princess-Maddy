/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Instagram3SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Instagram3SvgIcon(props: Instagram3SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"256"} cy={"256"} r={"52.5"}></circle>

      <path
        d={
          "M256 6C117.929 6 6 117.929 6 256s111.929 250 250 250 250-111.929 250-250S394.071 6 256 6zm154.458 313.54c-1.2 23.768-7.879 47.206-25.2 64.343-17.489 17.3-41.038 23.746-65.035 24.934H191.778c-24-1.188-47.546-7.63-65.035-24.934-17.322-17.137-24-40.575-25.2-64.343V192.46c1.2-23.768 7.879-47.206 25.2-64.344 17.489-17.3 41.038-23.746 65.035-24.933h128.444c24 1.187 47.546 7.63 65.035 24.933 17.322 17.138 24 40.576 25.2 64.344z"
        }
      ></path>

      <path
        d={
          "M318.6 132.138c-31.286-.858-93.906-.858-125.192 0-16.281.447-34.738 4.5-46.338 16.89-12.054 12.879-16.609 28.439-17.071 45.846-.812 30.552 0 122.252 0 122.252.529 17.405 5.017 32.967 17.071 45.846 11.6 12.394 30.057 16.443 46.338 16.89 31.286.858 93.906.858 125.192 0 16.281-.447 34.738-4.5 46.338-16.89 12.054-12.879 16.609-28.439 17.071-45.846V194.874c-.462-17.407-5.017-32.967-17.071-45.846-11.604-12.394-30.061-16.443-46.338-16.89zM256 337.375A81.375 81.375 0 11337.375 256 81.375 81.375 0 01256 337.375zm81.721-145.953A16.275 16.275 0 11354 175.147a16.275 16.275 0 01-16.279 16.275z"
        }
      ></path>
    </svg>
  );
}

export default Instagram3SvgIcon;
/* prettier-ignore-end */
