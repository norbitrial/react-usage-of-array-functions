import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    minHeight: 224,
    height: "20vh",
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
  "grid-item": {},
  syntax: {
    maxWidth: "100%",
  },
}));

export default useStyles;
