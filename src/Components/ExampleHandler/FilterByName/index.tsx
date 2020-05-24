import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import types from "../../../Duck/DessertData/types";

const FilterByName = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <p>
        <TextField
          id="standard-basic"
          label="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        <Button
          variant="contained"
          onClick={() =>
            dispatch({
              type: types.FILTER_BY_NAME,
              payload: name,
            })
          }
        >
          Filter
        </Button>
      </p>
    </>
  );
};

export default FilterByName;
