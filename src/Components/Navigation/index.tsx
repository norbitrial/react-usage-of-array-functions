import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { Tabs, Tab, Grid } from "@material-ui/core";
import Welcome from "./Welcome";
import TabPanel from "./TabPanel";
import IExample from "../../Interfaces/IExample";
import Consts from "../../Consts";
import types from "../../Duck/DessertData/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import axios from "axios";

const createProps = (index: Number) => ({
  id: `vertical-tab-${index}`,
  key: `vertical-tab-${index}`,
  "aria-controls": `vertical-tabpanel-${index}`,
});

const Navigation = () => {
  const classes = useStyles();
  const [examples] = useState<Array<IExample>>(Consts.Examples);
  const [value, setValue] = React.useState(0);
  const [codeSnippet, setCodeSnippet] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setCodeSnippet("");
      const currentExample = examples.find((e: IExample) => e.id === value);
      if (currentExample && currentExample.link) {
        const { link } = currentExample;
        const { data: code } = await axios.get(link);
        setCodeSnippet(code);
      }
    })();
  }, [examples, value]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    dispatch({ type: types.RESET_DESSERT_LIST });
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Welcome" {...createProps(0)} />
            {examples.map((example: IExample) => (
              <Tab label={example.label} {...createProps(example.id)} />
            ))}
          </Tabs>
          <TabPanel value={value} index={0}>
            <Welcome />
          </TabPanel>

          {examples.map((example: IExample) => (
            <TabPanel
              key={`${example.id}_${example.label}`}
              value={value}
              index={example.id}
            >
              <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <example.componentName />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  {codeSnippet && (
                    <SyntaxHighlighter language="typescript">
                      {codeSnippet}
                    </SyntaxHighlighter>
                  )}
                </Grid>
              </Grid>
            </TabPanel>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default Navigation;
