// @flow

/**
 * <App/>
 * This is the main Application component
 * @author Rolf Chen <rolf.chen@dataestate.com.au>
 */

import React, { useState } from "react";
import classnames from "classnames";
import {
  useTheme,
  makeStyles,
  Typography,
  CssBaseline
} from "@material-ui/core";
import { NavigationBar, HeaderBar, FooterBar } from "src/components/Navigation";
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

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classnames("App", classes.root)}>
      <CssBaseline />
      <HeaderBar
        navBarOpen={open}
        position="fixed"
        navBarWidth={drawerWidth}
        onHeaderNavToggle={handleDrawerOpen}
      />
      <NavigationBar
        className="App_navigation"
        open={open}
        variant="persistent"
        navBarWidth={drawerWidth}
        onNavBarToggle={handleDrawerClose}
      />
      <main
        className={classnames("App_content", classes.content, {
          [classes.contentShift]: open
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
