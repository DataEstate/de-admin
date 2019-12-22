// @flow

import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

type HeaderBarProps = {
  position: string,
  onHeaderNavToggle: (e: any) => void
};

export const HeaderBar: HeaderBarProps = ({
  position = "fixed",
  onHeaderNavToggle,
  ...props
}) => {
  return (
    <AppBar {...props} position={position}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onHeaderNavToggle}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Test Title</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
