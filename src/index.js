import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "./store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { App } from "./views";
import { AppStateProvider } from "./context/AppStateProvider";
import { getDefaultAppState, getDefaultReduxStore } from "./helpers";

import { dataEstateTheme } from "./themes/dataEstateTheme";

const appContainer = document.getElementById("root");
const store = configureStore(getDefaultReduxStore());
const theme = createMuiTheme(dataEstateTheme);

render(
  <ThemeProvider theme={theme}>
    <AppStateProvider store={getDefaultAppState()}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </AppStateProvider>
  </ThemeProvider>,
  appContainer
);
