import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import StyledTableCell from "../StyledTableCell";
import StyledTableRow from "../StyledTableRow";
import useStyles from "./styles";
import Consts from "../../Consts";
import IDessert from "../../Interfaces/IDessert";
import Emoji from "../Emoji";

const MaterialTable = ({ data }: any) => {
  const classes = useStyles();
  const [tableCellNames] = useState<Array<string>>(Consts.TableCellNames);
  const [maxLength] = useState<number>(80);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
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
          {data.map((dessert: IDessert) => (
            <StyledTableRow key={`${dessert.id}_${dessert.name}`}>
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
                {dessert.calories}
              </StyledTableCell>
              <StyledTableCell align="right">{dessert.type}</StyledTableCell>
              <StyledTableCell align="right">
                <Emoji text={dessert.isSweet ? "✔️" : "❌"} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MaterialTable;
