// @flow

import React, { Fragment, useState, useContext } from "react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  DialogTitle
} from "@material-ui/core";
import { Auth0Context } from "src/context";

import { type MenuItemType } from "src/components/Navigation/Types/MenuItemType";

type Props = {
  menuItems?: Array<MenuItemType>
};

export const UserMenu = ({ menuItems = [] }: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuIsOpen = Boolean(anchorEl);
  const { user = {}, logout } = useContext(Auth0Context);
  const { name: userName, picture } = user;
  console.log(user);
  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = event => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <IconButton size="small" onClick={handleMenuOpen}>
        <Avatar alt={userName} src={picture} />
      </IconButton>
      <Menu anchorEl={anchorEl} open={menuIsOpen} onClose={handleMenuClose}>
        <DialogTitle>{userName || ""}</DialogTitle>
        <MenuItem>My Account</MenuItem>
        <MenuItem onClick={logout}>Log Out</MenuItem>
      </Menu>
    </Fragment>
  );
};

export default UserMenu;
