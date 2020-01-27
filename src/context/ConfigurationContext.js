// @flow

import React, { createContext } from "react";

import { type ConfigurationStateType } from "./Types/ConfigurationtStateType";

export const ConfigurationContext = createContext<ConfigurationStateType>({
  site: {
    title: ""
  },
  navigation: {
    menu: []
  }
});

export default ConfigurationContext;
