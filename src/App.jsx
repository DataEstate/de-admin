// @flow

/**
 * <App/>
 * This is the main Application component
 * @author Rolf Chen <rolf.chen@dataestate.com.au>
 */

import React, { useContext, Fragment } from "react";
import classnames from "classnames";
import { makeStyles, Typography, Button } from "@material-ui/core";
import { ConfigurationContext, Auth0Context } from "src/context";
import { LoginScreen } from "src/screens";
import { SiteFrame } from "src/containers";
import { toggleNavbarOpenAction } from "src/context/actions";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute, GenericInterstitial } from "src/components";
import Login from "./screens/Login";
type AppProps = {
  id?: string,
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
  };
});

export const App = ({ id }: AppProps) => {
  const classes = useStyles();

  const { site, navigation } = useContext(ConfigurationContext);
  const { isAuthenticated, loginWithRedirect } = useContext(Auth0Context);

  return isAuthenticated === undefined ? (
    <GenericInterstitial />
  ) : (
    <Fragment>
      <Switch>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <PrivateRoute path="/">
          <SiteFrame
            title={site.title}
            navBarWidth={drawerWidth}
            className="App"
            menuItems={navigation.menu}
          >
            <div>Welcome!</div>
          </SiteFrame>
          ,
        </PrivateRoute>
      </Switch>
    </Fragment>
  );
};

export default App;
