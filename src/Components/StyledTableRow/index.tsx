import TableRow from "@material-ui/core/TableRow";
import { withStyles, createStyles, Theme } from "@material-ui/core";

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

export default StyledTableRow;
