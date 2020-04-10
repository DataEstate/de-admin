// @flow

import React, { useContext } from "react";
import classnames from "classnames";
import {
  makeStyles,
  Typography,
  Button,
  Paper,
  CssBaseline,
} from "@material-ui/core";
import { Auth0Context } from "src/context";

export const Login = () => {
  const { loginWithRedirect } = useContext(Auth0Context);

  return (
    <div className={classnames("LoginScreen")}>
      <Paper>
        <Typography variant="h1">Welcome to Data Estates.</Typography>
        <Typography variant="subtitle1">Please login below</Typography>
        <Button onClick={() => loginWithRedirect({})}>Log in</Button>
      </Paper>
    </div>
  );
};

export default Login;
