import React, { createContext, useContext } from "react";

export const Auth0Context = createContext();

export const useAuth = () => useContext(Auth0Context);

export default Auth0Context;
