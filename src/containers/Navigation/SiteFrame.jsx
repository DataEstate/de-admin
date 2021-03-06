// @flow

import React, { useContext } from "react";
import classnames from "classnames";
import { makeStyles, CssBaseline, Button } from "@material-ui/core";

import { AppStateContext, Auth0Context } from "src/context";
import { NavigationBar, HeaderBar, FooterBar } from "src/components/Navigation";
import { toggleNavbarOpenAction } from "src/context/actions";

import { type NavigationVariantType } from "src/components/Navigation/Types/NavigationVariantType";
import { type MenuItemType } from "src/components/Navigation/Types/MenuItemType";

type Props = {
  children: any,
  title: string,
  variant: NavigationVariantType,
  navBarWidth: number,
  className?: string,
  menuItems: Array<MenuItemType>
};

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: "flex"
    },
    drawerHeader: {
      ...theme.mixins.toolbar,
      display: "flex",
      justifyContent: "flex-end",
      padding: theme.spacing(1)
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
  className,
  menuItems = []
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
        menuItems={menuItems}
      />

      <main
        className={classnames("SiteFrame_content", classes.content, {
          [classes.contentShift]: navBarOpen
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
      <FooterBar />
    </div>
  );
};

export default SiteFrame;
