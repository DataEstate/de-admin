// @flow

import { type MenuItemType } from "src/components/Navigation/Types/MenuItemType";

export type ConfigurationStateType = {
  site: {
    title: string,
    tagline?: string
  },
  /**
   * Navgiation items
   */
  navigation: {
    menu: Array<MenuItemType>
  }
};
