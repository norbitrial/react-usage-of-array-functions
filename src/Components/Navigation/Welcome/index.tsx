import React from "react";
import Emoji from "../../Emoji";
import useStyles from "./styles";
import { Grid, useMediaQuery } from "@material-ui/core";
import Consts from "../../../Consts";

const Welcome = () => {
  const isSmallScreen = useMediaQuery(Consts.SmallScreenMediaQuery);
  const styles = useStyles();
  return (
    <>
      <Grid container>
        <Grid item>
          Meanwhile continuously answering questions on{" "}
          <a
            href="https://stackoverflow.com/users/7599510/norbitrial?tab=profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stack Overflow
          </a>{" "}
          I see challenges of using{" "}
          <span role="img" aria-label="code" className={styles["code"]}>
            .map()
          </span>
          ,{" "}
          <span role="img" aria-label="code" className={styles["code"]}>
            .filter()
          </span>
          ,{" "}
          <span role="img" aria-label="code" className={styles["code"]}>
            .find()
          </span>{" "}
          and their friends.
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          So as a fun project I decided to build this repository which
          represents several good ways of using{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
            target="_blank"
            rel="noopener noreferrer"
          >
            array functions
          </a>{" "}
          in practice. <Emoji text={"📋"} />
          <Emoji text={"✔️"} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Emoji text={isSmallScreen ? "☝️" : "👈"} /> Select an example first
          from the tabs
        </Grid>
      </Grid>
    </>
  );
};

export default Welcome;
