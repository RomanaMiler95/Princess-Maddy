/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ScheduleValue = "override";
export const ScheduleContext = React.createContext<ScheduleValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);
export function ScheduleContextProvider(
  props: React.PropsWithChildren<{ value: ScheduleValue | undefined }>
) {
  return (
    <ScheduleContext.Provider value={props.value}>
      {props.children}
    </ScheduleContext.Provider>
  );
}

export function useSchedule() {
  return React.useContext(ScheduleContext);
}

export default ScheduleContext;
/* prettier-ignore-end */
