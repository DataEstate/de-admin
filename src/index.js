import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "./store";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { App } from "./views";
import { dataEstateTheme } from "./themes/dataEstateTheme";

const appContainer = document.getElementById("root");
const store = configureStore({
  appName: "Data Estate Boiler Plate"
});
const theme = createMuiTheme(dataEstateTheme);

render(
  <ThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </ThemeProvider>,
  appContainer
);
