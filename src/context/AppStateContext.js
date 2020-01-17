// @flow

import React, { createContext } from "react";
import { type AppStateContextType } from "src/context/Types/AppStateContextType";

export const AppStateContext = createContext<AppStateContextType>({
  navBarOpen: false,
  dispatch: action => {}
});

export default AppStateContext;
