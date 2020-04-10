import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "./store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { App } from "./App";
import {
  AppStateProvider,
  ConfigurationProvider,
  Auth0Provider,
} from "./context";
import { getDefaultAppState, getDefaultReduxStore } from "./helpers";
import history from "./utils/history";
import { BrowserRouter } from "react-router-dom";
import { theme as themeConfig, config, authConfig } from "./configs/DataEstate";

const appContainer = document.getElementById("root");
const store = configureStore(getDefaultReduxStore());
const theme = createMuiTheme(themeConfig);

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ConfigurationProvider config={config}>
        <AppStateProvider store={getDefaultAppState()}>
          <Auth0Provider
            domain={authConfig.domain}
            client_id={authConfig.client_id}
            redirect_uri={authConfig.redirect_uri}
            onRedirectCallback={onRedirectCallback}
          >
            <BrowserRouter>
              <ReduxProvider store={store}>
                <App />
              </ReduxProvider>
            </BrowserRouter>
          </Auth0Provider>
        </AppStateProvider>
      </ConfigurationProvider>
    </ThemeProvider>
  </React.StrictMode>,
  appContainer
);
