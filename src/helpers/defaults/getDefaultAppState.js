// @flow

import type { AppStateType } from "../../context/Types/AppStateType";

type GetDefaultAppState = () => AppStateType;

export const getDefaultAppState: GetDefaultAppState = () => ({
  navBarOpen: true
});

export default getDefaultAppState;
