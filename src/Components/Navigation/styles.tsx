import { makeStyles, Theme } from "@material-ui/core";
import Consts from "../../Consts";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    minHeight: "350px",
    height: "20vh",
    paddingBottom: "2vh",
    [`@media ${Consts.SmallScreenMediaQuery}`]: {
      minHeight: "0",
      height: "47px",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: "170px",
  },
  "tab-panel": {
    width: "100%",
  },
  "grid-container": {
    width: "100%",
    padding: "0px !important",
  },
  "grid-item": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  syntax: {
    maxWidth: "100%",
    borderRadius: "4px 4px 4px 4px",
  },
}));

export default useStyles;
