// @flow

import { type ConfigurationStateType } from "src/context/Types/ConfigurationtStateType";

export const config: ConfigurationStateType = {
  site: {
    title: "Data Estate Manager",
    tagline: "Manage your data today"
  },
  navigation: {
    menu: [
      {
        label: "Estates"
      },
      {
        label: "Users"
      },
      {
        label: "Billing & Subscription"
      }
    ]
  }
};

export default config;
