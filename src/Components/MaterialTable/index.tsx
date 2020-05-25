import React, { useState, Fragment } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import StyledTableCell from "../StyledTableCell";
import StyledTableRow from "../StyledTableRow";
import useStyles from "./styles";
import Consts from "../../Consts";
import IDessert from "../../Interfaces/IDessert";
import Emoji from "../Emoji";
import {
  IconButton,
  TableCell,
  TableRow,
  Collapse,
  Box,
  Grid,
  Chip,
} from "@material-ui/core";
import IIngredient from "../../Interfaces/IIngredient";
import ITableRowState from "../../Interfaces/ITableRowState";

const MaterialTable = ({ data }: any) => {
  const classes = useStyles();
  const [tableRowStates, setTableRowStates] = useState<Array<ITableRowState>>(
    Consts.DessertList.map((dessert: IDessert) => ({ dessert, open: false }))
  );
  const [tableCellNames] = useState<Array<string>>(Consts.TableCellNames);
  const [maxLength] = useState<number>(80);

  const isOpen = (dessert: IDessert) => {
    const rowState = tableRowStates.find(
      (s: ITableRowState) => s.dessert.id === dessert.id
    );

    return rowState ? rowState.open : false;
  };

  const setOpen = (dessert: IDessert) => {
    setTableRowStates((previousState) => {
      const cloneStates = [...previousState];
      const state = cloneStates.find(
        (e: ITableRowState) => e.dessert.id === dessert.id
      );
      console.log({ dessert, state, previousState });
      if (state) {
        state.open = !state.open;
      }

      return cloneStates;
    });
  };

  const renderIngredients = (ingredients: Array<number>) => {
    return ingredients.map((ingredientId: number) => {
      const ingredient = Consts.IngredientsList.find(
        (e: IIngredient) => e.id === ingredientId
      );

      return (
        ingredient && (
          <Chip
            key={ingredientId}
            className={classes["ingredient-chip"]}
            label={ingredient.name}
          />
        )
      );
    });
  };

  const renderMoreDetailsSection = (dessert: IDessert) => {
    return (
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={isOpen(dessert)} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Grid container>
                <Grid
                  item
                  lg={2}
                  md={2}
                  sm={2}
                  xs={2}
                  className={classes["image-center"]}
                >
                  <img
                    src={dessert.image}
                    alt={dessert.name}
                    className={classes["image-big"]}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Ingredients</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow key={`${dessert.id}`}>
                        <TableCell className={classes["more-description"]}>
                          {dessert.description}
                        </TableCell>
                        <TableCell>
                          {renderIngredients(dessert.ingredients)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell key={"arrow"}></StyledTableCell>
            {tableCellNames.map((fieldName: string, index: number) => (
              <StyledTableCell
                key={index}
                align={index <= 2 ? "left" : "right"}
              >
                {fieldName}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((dessert: IDessert) => (
              <Fragment key={`${dessert.id}`}>
                <StyledTableRow key={`${dessert.id}_${dessert.name}`}>
                  <StyledTableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(dessert)}
                    >
                      {isOpen(dessert) ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <strong>{dessert.name}</strong>
                  </StyledTableCell>
                  <StyledTableCell>
                    <img
                      src={dessert.image}
                      alt={dessert.name}
                      className={classes["image"]}
                    />
                  </StyledTableCell>
                  <StyledTableCell>
                    {dessert.description.length > maxLength
                      ? `${dessert.description.substring(0, maxLength)}...`
                      : dessert.description}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <strong>{dessert.calories}</strong> kcal
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {dessert.type}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Emoji text={dessert.hasChocolate ? "✔️" : "❌"} />
                  </StyledTableCell>
                </StyledTableRow>

                {renderMoreDetailsSection(dessert)}
              </Fragment>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MaterialTable;
