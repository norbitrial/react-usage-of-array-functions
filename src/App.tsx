import React, { useState } from "react";
import MaterialTable from "./Components/MaterialTable";
import useStyles from "./App.styles";
import { Container } from "@material-ui/core";
import Header from "./Components/Header";
import CodeRepo from "./Components/CodeRepo";
import Navigation from "./Components/Navigation";
import Consts from "./Consts";
import IDessert from "./Interfaces/IDessert";

const App = () => {
  const styles = useStyles();
  const [dessertList] = useState<Array<IDessert>>(Consts.DessertList);

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
