// @flow

import React, { useContext } from "react";
import classnames from "classnames";
import { makeStyles, CssBaseline } from "@material-ui/core";

import { AppStateContext } from "src/context/AppStateContext";
import { NavigationBar, HeaderBar, FooterBar } from "src/components/Navigation";
import { toggleNavbarOpenAction } from "src/context/actions";

import { type NavigationVariantType } from "src/components/Navigation/Types/NavigationVariantType";

type Props = {
  children: any,
  title: string,
  variant: NavigationVariantType,
  navBarWidth: number,
  className?: string
};

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: "flex"
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    contentShift: drawerWidth => ({
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: drawerWidth
    })
  };
});

export const SiteFrame = ({
  children,
  title,
  variant = "persistent",
  navBarWidth = 240,
  className
}: Props) => {
  const { navBarOpen, dispatch } = useContext(AppStateContext);
  const classes = useStyles(navBarWidth);

  const handleNavbarOpen = () => {
    dispatch(toggleNavbarOpenAction(!navBarOpen));
  };
  return (
    <div className={classnames("SiteFrame", classes.root)}>
      <CssBaseline />
      <HeaderBar
        position="fixed"
        navBarWidth={navBarWidth}
        navBarOpen={navBarOpen}
        onHeaderNavToggle={handleNavbarOpen}
        title={title}
        className="SiteFrame_headerBar"
      />
      <NavigationBar
        className="SiteFrame_navigationBar"
        variant="persistent"
        navBarWidth={navBarWidth}
        open={navBarOpen}
        onNavBarToggle={handleNavbarOpen}
      />
      <main
        className={classnames("SiteFrame_content", classes.content, {
          [classes.contentShift]: navBarOpen
        })}
      >
        {children}
      </main>
      <FooterBar />
    </div>
  );
};

export default SiteFrame;
