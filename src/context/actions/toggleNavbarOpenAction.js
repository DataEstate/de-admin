// @flow

import type { ToggleNavbarOpenAction } from "../Types/ToggleNavbarOpenAction";

type ToggleNavbarOpenActionType = (
  navBarOpen: boolean
) => ToggleNavbarOpenAction;

export const toggleNavbarOpenAction: ToggleNavbarOpenActionType = navBarOpen => ({
  type: "TOGGLE_NAVBAR_OPEN",
  navBarOpen
});

export default toggleNavbarOpenAction;
