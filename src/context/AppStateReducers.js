//@flow

import React from "react";
import type { AppStateType } from "./Types/AppStateType";
import type { ToggleNavbarOpenAction } from "./Types/ToggleNavbarOpenAction";

type AppStateActions = ToggleNavbarOpenAction;

export const AppStateReducers = (
  state: AppStateType,
  action: AppStateActions
) => {
  switch (action.type) {
    case "TOGGLE_NAVBAR_OPEN":
      return {
        ...state,
        navBarOpen: action.navBarOpen
      };
    default:
      return state;
  }
};

export default AppStateReducers;
