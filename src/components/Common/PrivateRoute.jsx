// @flow

import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth0Context } from "src/context/Auth0Context";
import type { Node as ReactNode } from "react";

type Props = {
  children: ReactNode,
};

export const PrivateRoute = ({ children, ...props }: Props) => {
  const { isAuthenticated } = useContext(Auth0Context);
  console.log("Is it authenticated? ", isAuthenticated);
  const render = ({ location }) =>
    isAuthenticated ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      />
    );

  return <Route {...props} render={render} />;
};

export default PrivateRoute;
