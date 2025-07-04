/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ScreenValue = "mobile" | "tablet" | "smallDesktop" | "largeDesktop";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);
export function ScreenContextProvider(
  props: React.PropsWithChildren<{ value: ScreenValue[] | undefined }>
) {
  return (
    <ScreenContext.Provider value={props.value}>
      {props.children}
    </ScreenContext.Provider>
  );
}

export const useScreenVariants = createUseScreenVariants(true, {
  mobile: "(min-width:0px) and (max-width:930px)",
  tablet: "(max-width:1439px)",
  smallDesktop: "(max-width:1919px)",
  largeDesktop: "(max-width:3840px)",
});

export default ScreenContext;
/* prettier-ignore-end */
