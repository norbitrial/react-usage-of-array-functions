import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import types from "../../../Duck/DessertData/types";
import useStyles from "./styles";

const FilterByString = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  return (
    <Grid container className={classes["grid-container"]}>
      <Grid item className={classes["grid-item"]}>
        <TextField
          id="standard-basic"
          label="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item className={classes["grid-item"]}>
        <Button
          variant="contained"
          onClick={() =>
            dispatch({
              type: types.FILTER_BY_STRING,
              payload: name,
            })
          }
        >
          Filter
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilterByString;
