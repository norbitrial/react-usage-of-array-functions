import React from "react";
import Emoji from "../../Emoji";
import useStyles from "./styles";
import { useMediaQuery } from "@material-ui/core";
import Consts from "../../../Consts";
import { Typography } from "@material-ui/core";

const Welcome = () => {
  const isSmallScreen = useMediaQuery(Consts.SmallScreenMediaQuery);
  const styles = useStyles();
  return (
    <>
      <Typography variant="body1" gutterBottom={true}>
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
        and their friends. So as a fun project I decided to build this
        repository which represents several good ways of using{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
          target="_blank"
          rel="noopener noreferrer"
        >
          array functions
        </a>{" "}
        in practice. <Emoji text={"📋"} />
        <Emoji text={"✔️"} />
      </Typography>
      <Typography variant="body1" gutterBottom={true}>
        <Emoji text={isSmallScreen ? "☝" : "👈"} /> Select an example from the
        tabs
      </Typography>
      <Typography variant="body1" gutterBottom={true}>
        <Emoji text="🌎" /> Or visit my website:{" "}
        <a
          href="https://szabonorbert.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          szabonorbert.me
        </a>
      </Typography>
    </>
  );
};

export default Welcome;
