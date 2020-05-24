import React from "react";
import Emoji from "../Emoji";
import useStyles from "./styles";

const Header = () => {
  const styles = useStyles();

  return (
    <>
      <h1>Usage of array functions in React</h1>
      <h4>
        Meanwhile continuously answering questions on{" "}
        <a
          href="https://stackoverflow.com/users/7599510/norbitrial?tab=profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stack Overflow
        </a>{" "}
        I face challenges of using{" "}
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
        <br />
        So as a fun project I decided to build this repository which represents
        several good ways of using{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
          target="_blank"
          rel="noopener noreferrer"
        >
          array functions
        </a>{" "}
        in practice. <Emoji text={"📋"} />
        <Emoji text={"✔️"} />
      </h4>
    </>
  );
};

export default Header;
