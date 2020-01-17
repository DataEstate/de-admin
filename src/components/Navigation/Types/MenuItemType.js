// @flow

export type MenuItemType = {
  /**
   * The displayed text of the menu
   */
  label: string,
  /**
   * Hyperlink for the menu item.
   */
  link?: string,
  /**
   * If it's a hyperlink, used to define the target (i.e. _blank)
   */
  target?: string,
  /**
   * onClick handler if it should trigger an event.
   */
  onClick?: (e: any) => void,
  /**
   * submenu, if this menu item has any submenu.
   */
  submenu?: Array<MenuItemType>
};
