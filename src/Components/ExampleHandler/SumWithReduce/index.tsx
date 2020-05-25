import React from "react";
import {
  Button,
  Input,
  InputAdornment,
  FormControl,
  FormHelperText,
  Grid,
} from "@material-ui/core";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import types from "../../../Duck/DessertData/types";
import useStyles from "./styles";

const SumWithReduce = () => {
  const classes = useStyles();
  const sumOfCalories = useSelector(
    ({ dessertReducer: reducer }: RootStateOrAny) => reducer.sumOfCalories
  );
  const dispatch = useDispatch();

  return (
    <Grid container className={classes["grid-container"]}>
      <Grid item className={classes["grid-item"]}>
        <FormControl className={classes["form-control"]}>
          <Input
            id="standard-adornment-weight"
            value={sumOfCalories}
            endAdornment={<InputAdornment position="end">kcal</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <FormHelperText id="standard-weight-helper-text">
            Calories
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item className={classes["grid-item"]}>
        <Button
          variant="contained"
          onClick={() =>
            dispatch({
              type: types.SUM_WITH_REDUCE,
            })
          }
        >
          Calculate Sum
        </Button>
      </Grid>
    </Grid>
  );
};

export default SumWithReduce;
