import React from "react";
import ILoadingProps from "../../Interfaces/ILoadingProps";
import { CircularProgress, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Loading = (props: ILoadingProps) => {
  const classes = useStyles();
  const { text } = props;

  return (
    <Grid container className={classes["grid-container"]}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <CircularProgress color="secondary" />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <span>{text}</span>
      </Grid>
    </Grid>
  );
};

export default Loading;
