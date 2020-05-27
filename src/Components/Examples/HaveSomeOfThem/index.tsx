import React, { useState } from "react";
import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import types from "../../../Duck/DessertData/types";
import useStyles from "./styles";
import Consts from "../../../Consts";
import IIngredient from "../../../Interfaces/IIngredient";

const HasSomeOfThemIngredient = () => {
  const classes = useStyles();
  const [hasChecked, setHasChecked] = useState<boolean>(false);
  const [ingredient, setIngredient] = useState<IIngredient>(
    Consts.IngredientsList[0]
  );
  const isTrueStatement = useSelector(
    (state: RootStateOrAny) => state.dessertReducer.isTrueStatement
  );
  const dispatch = useDispatch();

  const onCheckClick = () => {
    dispatch({
      type: types.HAVE_SOME_OF_THEM,
      payload: ingredient,
    });
    setHasChecked(true);
  };

  const onSelectIngredient = (e: any) => {
    const ingredient = Consts.IngredientsList.find(
      (f: IIngredient) => f.id === e.target.value
    );

    if (ingredient) {
      setIngredient(ingredient);
      setHasChecked(false);
    }
  };

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
        <FormControl className={classes["form-control"]}>
          <InputLabel id="ingredientId">Ingredient</InputLabel>
          <Select
            labelId="ingredient"
            id="ingredient"
            value={ingredient.id}
            onChange={onSelectIngredient}
          >
            {Consts.IngredientsList.map((e: IIngredient) => (
              <MenuItem key={e.name} value={e.id}>
                {e.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        className={classes["grid-item"]}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <Button variant="contained" onClick={onCheckClick}>
          Check
        </Button>
      </Grid>
      <Grid
        item
        className={classes["grid-item"]}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <Typography variant="body1" gutterBottom>
          {hasChecked && ingredient
            ? `${isTrueStatement ? "Some" : "None"} of the desserts have ${
                ingredient.name
              }. ${isTrueStatement ? "✔️" : "❌"}`
            : null}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HasSomeOfThemIngredient;
