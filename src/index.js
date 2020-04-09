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
  Auth0Provider
} from "./context";
import { getDefaultAppState, getDefaultReduxStore } from "./helpers";
import history from "./utils/history";
import { theme as themeConfig, config, authConfig } from "./configs/DataEstate";

const appContainer = document.getElementById("root");
const store = configureStore(getDefaultReduxStore());
const theme = createMuiTheme(themeConfig);

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

render(
  <ThemeProvider theme={theme}>
    <ConfigurationProvider config={config}>
      <AppStateProvider store={getDefaultAppState()}>
        <Auth0Provider
          domain={authConfig.domain}
          client_id={authConfig.client_id}
          scope={authConfig.scope}
          redirect_uri={authConfig.redirect_uri}
          onRedirectCallback={onRedirectCallback}
        >
          <ReduxProvider store={store}>
            <App />
          </ReduxProvider>
        </Auth0Provider>
      </AppStateProvider>
    </ConfigurationProvider>
  </ThemeProvider>,
  appContainer
);
