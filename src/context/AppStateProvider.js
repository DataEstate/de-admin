// @flow

import React, { useReducer } from "react";
import AppStateContext from "./AppStateContext";

import type { AppStateType } from "./Types/AppStateType";

const { Provider } = AppStateContext;

type Props = {
  store: AppStateType,
  children: any
};

export const AppStateProvider = ({ store, children }: Props) => {
  return <Provider value={store}>{children}</Provider>;
};

export default AppStateProvider;
