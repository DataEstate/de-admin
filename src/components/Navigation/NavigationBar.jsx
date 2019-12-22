// @flow

import React from "react";
import classnames from "classnames";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  makeStyles
} from "@material-ui/core";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from "@material-ui/icons";

type Props = {
  className?: string,
  variant: "permanent" | "persistent" | "temporary",
  navBarWidth: number,
  open: boolean,
  onNavBarToggle: (e: any) => void
};
// @reference - https://material-ui.com/styles/basics/#hook-api
const useStyles = makeStyles(theme => ({
  drawer: ({ navBarWidth }) => ({
    width: navBarWidth,
    flexShrink: 0
  }),
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  drawerPaper: ({ navBarWidth }) => ({
    width: navBarWidth
  })
}));

export const NavigationBar = ({
  className,
  variant = "persistent",
  open = true,
  navBarWidth = 240,
  onNavBarToggle
}: Props) => {
  const theme = useTheme();
  const classes = useStyles({
    navBarWidth
  });
  const childComponentClasses = {
    paper: classes.drawerPaper
  };

  return (
    <div className="NavigationBar">
      <Drawer
        anchor="left"
        variant={variant}
        className={classnames("NavigationBar__drawer", className)}
        open={open}
        classes={childComponentClasses}
      >
        <header className={classes.drawerHeader}>
          <IconButton onClick={onNavBarToggle}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </header>
        <nav className="NavigationBar__nav">
          <List>
            <ListItem>
              <ListItemText>Menu Item 1</ListItemText>
            </ListItem>
          </List>
        </nav>
      </Drawer>
    </div>
  );
};
export default NavigationBar;
