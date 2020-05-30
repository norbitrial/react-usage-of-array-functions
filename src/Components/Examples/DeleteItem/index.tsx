import React, { useState } from "react";
import {
  Button,
  Grid,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import types from "../../../Duck/DessertData/types";
import useStyles from "./styles";
import Consts from "../../../Consts";
import IDessert from "../../../Interfaces/IDessert";

const DeleteItem = () => {
  const classes = useStyles();
  const [name, setName] = useState<string>(Consts.DessertList[0].name);
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
        <FormControl className={classes["form-control"]}>
          <InputLabel id="nameId">Name</InputLabel>
          <Select
            labelId="name"
            id="name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          >
            {Consts.DessertList.map((e: IDessert) => (
              <MenuItem key={e.name} value={e.name}>
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
        <Button
          variant="contained"
          onClick={() =>
            dispatch({
              type: types.DELETE_ITEM,
              payload: name,
            })
          }
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default DeleteItem;
