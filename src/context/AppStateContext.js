import React, { createContext } from "react";
import type { AppStateContextType } from "./Types/AppStateContextType";

export const AppStateContext = createContext({
  navBarOpen: false
});

export default AppStateContext;
