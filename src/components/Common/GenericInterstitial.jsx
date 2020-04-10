// @flow

import React from "react";
import classnames from "classnames";
import { Typography, CircularProgress, makeStyles } from "@material-ui/core";

type Props = {
  heading?: string,
  content?: any,
};

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: "2em",
    textAlign: "center",
  },
  content: {
    fontSize: "1em",
    textAlign: "center",
  },
}));

export const GenericInterstitial = ({
  heading = "Loading...",
  content = "",
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Typography variant="h2" className={classes.heading}>
        {heading}
      </Typography>
      <div className={classes.content}>{content}</div>
      <CircularProgress />
    </div>
  );
};

export default GenericInterstitial;
