// @flow

/**
 * <App/>
 * This is the main Application component
 * @author Rolf Chen <rolf.chen@dataestate.com.au>
 */

import React from "react";
import classnames from "classnames";
import {
  useTheme,
  makeStyles,
  Typography,
  CssBaseline
} from "@material-ui/core";
import { SiteFrame } from "src/containers";
import { toggleNavbarOpenAction } from "src/context/actions";
import { propIfExists } from "src/helpers";

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

  return (
    <SiteFrame title="Dashboard" navBarWidth={drawerWidth} className="App">
      <div>Hi, I am a website</div>
    </SiteFrame>
  );
};

export default App;
