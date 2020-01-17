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
  CssBaseline
} from "@material-ui/core";
import { AppStateContext } from "src/context/AppStateContext";
import { NavigationBar, HeaderBar } from "src/containers";
import { FooterBar } from "src/components";
import { propIfExists } from "src/helpers";

type AppProps = {
  id?: string
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: "flex"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: drawerWidth
    }
  };
});

export const App = ({ id }: AppProps) => {
  const classes = useStyles();

  const { navBarOpen, dispatch } = useContext(AppStateContext);

  return (
    <div className={classnames("App", classes.root)}>
      <CssBaseline />
      <HeaderBar position="fixed" navBarWidth={drawerWidth} />
      <NavigationBar
        className="App_navigation"
        variant="persistent"
        navBarWidth={drawerWidth}
      />
      <main
        className={classnames("App_content", classes.content, {
          [classes.contentShift]: navBarOpen
        })}
      >
        <div className={classes.toolbar} />
        Main Content asdfasdfasdf asdfasdf
      </main>
      <FooterBar />
    </div>
  );
};

export default App;
