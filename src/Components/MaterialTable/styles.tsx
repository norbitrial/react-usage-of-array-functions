import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  image: {
    maxWidth: 50,
  },
  "image-big": {
    maxWidth: 100,
  },
  "image-center": {
    display: "flex",
    alignItems: "center",
  },
  "ingredient-chip": {
    margin: "2px 2px 2px 2px",
  },
  "more-description": {
    maxWidth: "50vw",
    textAlign: "justify",
  },
});

export default useStyles;
