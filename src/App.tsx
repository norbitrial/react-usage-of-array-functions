import React from "react";
import MaterialTable from "./Components/MaterialTable";
import useStyles from "./App.styles";
import { Container } from "@material-ui/core";
import Header from "./Components/Header";
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
        <Header />

        <Navigation />
        <MaterialTable data={dessertList} />

        <CodeRepo />
      </Container>
    </div>
  );
};

export default App;
