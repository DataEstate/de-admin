// @flow

import React from "react";
import classnames from "classnames";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  makeStyles
} from "@material-ui/core";

type Props = {
  className?: string,
  variant: string,
  classes: {}
};

export const NavigationBar = ({
  className,
  variant = "persistent",
  classes
}: Props) => {
  return (
    <nav className="NavigationBar">
      <Drawer
        anchor="left"
        variant={variant}
        className={className}
        classes={classes}
      >
        <List>
          <ListItem>
            <ListItemText>Menu Item 1</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );
};
export default NavigationBar;
