import React from "react";
import MaterialTable from "./Components/MaterialTable";
import useStyles from "./App.styles";
import { Container } from "@material-ui/core";
import Emoji from "./Components/Emoji";

const App = () => {
  const styles = useStyles();
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const data = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <div className={styles["app"]}>
      <Container maxWidth="lg" className={styles["app-main"]}>
        <h1>Usage of array functions in React</h1>
        <h4>
          Meanwhile continously answering questions on{" "}
          <a
            href="https://stackoverflow.com/users/7599510/norbitrial?tab=profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stack Overflow
          </a>{" "}
          I face questions regarding challenges of using{" "}
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
        </h4>

        <MaterialTable data={data} />

        <h4>
          <Emoji text={"👨‍💻"} />{" "}
          <a
            href="https://github.com/norbitrial/react-usage-of-array-functions"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/norbitrial/react-usage-of-array-functions
          </a>
        </h4>
      </Container>
    </div>
  );
};

export default App;
