// @flow

import React from "react";
import classnames from "classnames";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { type NavigationVariantType } from "./Types/NavigationVariantType";

type HeaderBarProps = {
  position: string,
  variant: NavigationVariantType,
  navBarWidth: number,
  navBarOpen: boolean,
  className: string,
  title: string,
  onHeaderNavToggle: (e: any) => void
};

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: ({ navBarWidth }) => ({
    width: `calc(100% - ${navBarWidth}px)`,
    marginLeft: navBarWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

export const HeaderBar = ({
  position = "fixed",
  onHeaderNavToggle,
  navBarWidth = 240,
  navBarOpen = false,
  className = "",
  title = ""
}: HeaderBarProps) => {
  const classes = useStyles({
    navBarWidth
  });
  return (
    <AppBar
      className={classnames(
        classes.appBar,
        {
          [classes.appBarShift]: navBarOpen
        },
        className
      )}
      position={position}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onHeaderNavToggle}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
