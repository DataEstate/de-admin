// @flow

import React from "react";
import classnames from "classnames";
import {
  Drawer,
  MenuList,
  MenuItem,
  IconButton,
  useTheme,
  makeStyles
} from "@material-ui/core";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from "@material-ui/icons";

import { type NavigationVariantType } from "./Types/NavigationVariantType";
import { type MenuItemType } from "./Types/MenuItemType";

type Props = {
  className?: string,
  menuItems: Array<MenuItemType>,
  variant: NavigationVariantType,
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
  onNavBarToggle,
  menuItems = []
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
          {menuItems && (
            <MenuList>
              {menuItems.map((menu, idx) => {
                return <MenuItem key={idx}>{menu.label}</MenuItem>;
              })}
            </MenuList>
          )}
        </nav>
      </Drawer>
    </div>
  );
};
export default NavigationBar;
