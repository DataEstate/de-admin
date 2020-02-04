// @flow

import { type ConfigurationStateType } from "src/context/Types/ConfigurationtStateType";

export const config: ConfigurationStateType = {
  site: {
    title: "Data Estate",
    tagline: "Manage your data today"
  },
  navigation: {
    menu: [
      {
        label: "Businesses"
      },
      {
        label: "PBU"
      },
      {
        label: "Billing & Subscription"
      }
    ]
  }
};

export default config;
