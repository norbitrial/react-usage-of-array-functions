import React, { useState, useEffect } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { useDispatch } from "react-redux";
import types from "../../../Duck/DessertData/types";

const FilterByBoolean = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    ChocolateCheckBox: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: types.FILTER_BY_BOOLEAN,
      payload: event.target.checked,
    });
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    dispatch({
      type: types.FILTER_BY_BOOLEAN,
      payload: true,
    });
  }, [dispatch]);

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.ChocolateCheckBox}
            onChange={handleChange}
            name="ChocolateCheckBox"
            color="primary"
          />
        }
        label="Contains 🍫"
      />
    </>
  );
};

export default FilterByBoolean;
