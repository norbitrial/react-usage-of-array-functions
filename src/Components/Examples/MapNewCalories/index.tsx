import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import types from "../../../Duck/DessertData/types";
import { Button } from "@material-ui/core";

const MapNewCalories = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid container className={classes["grid-container"]}>
      <Grid
        item
        className={classes["grid-item"]}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <Button
          variant="contained"
          onClick={() => dispatch({ type: types.MAP_NEW_CALORIES })}
        >
          Generate Calories
        </Button>
      </Grid>
    </Grid>
  );
};

export default MapNewCalories;
