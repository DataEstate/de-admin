// @flow

import type { AppStateType } from "../../context/Types/AppStateType";

export type GetDefaultAppState = () => AppStateType;

export const getDefaultAppState: GetDefaultAppState = () => ({
  navBarOpen: false
});

export default getDefaultAppState;
