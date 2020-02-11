// @flow

/**
 * <App/>
 * This is the main Application component
 * @author Rolf Chen <rolf.chen@dataestate.com.au>
 */

import React, { useContext } from "react";
import classnames from "classnames";
import {
  useTheme,
  makeStyles,
  Typography,
  CssBaseline,
  Button
} from "@material-ui/core";
import { ConfigurationContext, Auth0Context } from "src/context";
import { SiteFrame } from "src/containers";
import { toggleNavbarOpenAction } from "src/context/actions";
import { propIfExists } from "src/helpers";
//Demo
import FairFarms from "src/screens/FairFarms/FairFarms";

type AppProps = {
  id?: string
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => {
  return {
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
  };
});

export const App = ({ id }: AppProps) => {
  const classes = useStyles();

  const { site, navigation } = useContext(ConfigurationContext);
  const { isAuthenticated, loginWithRedirect } = useContext(Auth0Context);
  return !isAuthenticated ? (
    <Typography>
      Unauthorized, please log in below
      <Button onClick={() => loginWithRedirect({})}>Log in</Button>
    </Typography>
  ) : (
    <SiteFrame
      title={site.title}
      navBarWidth={drawerWidth}
      className="App"
      menuItems={navigation.menu}
    >
      <FairFarms />
    </SiteFrame>
  );
};
[];
export default App;
