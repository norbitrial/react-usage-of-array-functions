import React from "react";
import AlertComponent from "@material-ui/lab/Alert";
import useStyles from "./styles";
import Emoji from "../Emoji";

const Error = () => {
  const classes = useStyles();

  return (
    <AlertComponent
      variant="outlined"
      severity="error"
      className={classes["alert"]}
    >
      Something went wrong <Emoji text={"😔"} /> - Try again later
    </AlertComponent>
  );
};

export default Error;
