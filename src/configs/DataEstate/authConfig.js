// @flow

export type AuthConfigType = {
  domain: string,
  client_id: string,
  redirect_uri: string
};

export const authConfig: AuthConfigType = {
  domain: "dataestate-dev.au.auth0.com",
  client_id: "ULxgPIFWbQQISDxyPRKwWGlr7RsVCtLd",
  redirect_uri: window.location.origin
};

export default authConfig;
