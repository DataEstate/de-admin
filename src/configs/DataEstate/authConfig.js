// @flow

export type AuthConfigType = {
  domain: string,
  client_id: string,
  scope: string,
  redirect_uri: string
};

export const authConfig: AuthConfigType = {
  domain: "https://payment-dev.dataestate.net",
  client_id: "ULxgPIFWbQQISDxyPRKwWGlr7RsVCtLd",
  scope:
    "openid profile email subscription:read subscription:delete subscript:update subscript:create",
  redirect_uri: window.location.origin
};

export default authConfig;
