// @flow

import React, { createContext } from "react";
import type { AppStateType } from "./Types/AppStateType";

export const AppStateContext = createContext<AppStateType>({
  navBarOpen: false
});

export default AppStateContext;
