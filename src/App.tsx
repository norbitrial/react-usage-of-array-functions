import React from "react";
import MaterialTable from "./Components/MaterialTable";
import useStyles from "./App.styles";
import { Container } from "@material-ui/core";
import CodeRepo from "./Components/CodeRepo";
import Navigation from "./Components/Navigation";
import { useSelector, RootStateOrAny } from "react-redux";

const App = () => {
  const styles = useStyles();
  const dessertList = useSelector(
    ({ dessertReducer: reducer }: RootStateOrAny) => reducer.items
  );

  return (
    <div className={styles["app"]}>
      <Container maxWidth="lg" className={styles["app-main"]}>
        <h1>Usage of array functions in React</h1>

        <Navigation />
        <MaterialTable data={dessertList} />

        <CodeRepo />
      </Container>
    </div>
  );
};

export default App;
