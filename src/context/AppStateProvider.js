// @flow

import React, { useReducer } from "react";
import AppStateContext from "./AppStateContext";

const { Provider } = AppStateContext;

type Props = {
  store: {},
  children: React.Node
};

export const AppStateProvider = ({ store, children }: Props) => {
  return <Provider>{children}</Provider>;
};

export default AppStateProvider;
