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
import { NavigationBar, HeaderBar, FooterBar } from "components/Navigation";
import { propIfExists } from "helpers";

type AppProps = {
  id?: string
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
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
      padding: theme.spacing(3)
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
        className={classes.appBar}
        position="fixed"
        onHeaderNavToggle={handleDrawerOpen}
      />
      <NavigationBar
        className="App_navigation"
        open={open}
        variant="persistent"
        navBarWidth={drawerWidth}
        onNavBarToggle={handleDrawerClose}
      />
      <main className={classnames("App_content", classes.content)}>
        Main Content asdfasdfasdf asdfasdf
      </main>
      <FooterBar />
    </div>
  );
};

export default App;
