// @flow

import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { MenuIcon } from "@material-ui/icons/Menu";

type HeaderBarProps = {
  position: string,
  onMenuToggle: (e: any) => void
};

export const HeaderBar: HeaderBarProps = ({
  position = "fixed",
  onMenuToggle,
  ...props
}) => {
  return (
    <AppBar {...props} position={position}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuToggle}
          edge="start"
        />
        <Typography variant="h6">Test Title</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
