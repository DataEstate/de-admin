import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "./store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { App } from "./views";
import { AppStateProvider, ConfigurationProvider } from "./context";
import { getDefaultAppState, getDefaultReduxStore } from "./helpers";

import { theme as themeConfig, config } from "./configs/DataEstate";

const appContainer = document.getElementById("root");
const store = configureStore(getDefaultReduxStore());
const theme = createMuiTheme(themeConfig);

render(
  <ThemeProvider theme={theme}>
    <ConfigurationProvider config={config}>
      <AppStateProvider store={getDefaultAppState()}>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </AppStateProvider>
    </ConfigurationProvider>
  </ThemeProvider>,
  appContainer
);
