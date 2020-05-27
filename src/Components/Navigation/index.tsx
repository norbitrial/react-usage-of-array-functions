import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { Tabs, Tab, Grid, useMediaQuery } from "@material-ui/core";
import Welcome from "./Welcome";
import TabPanel from "./TabPanel";
import Loading from "../Loading";
import IExample from "../../Interfaces/IExample";
import Consts from "../../Consts";
import types from "../../Duck/DessertData/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import axios from "axios";
import Error from "../Error";
import ReactGA from "react-ga";

const createProps = (index: Number) => ({
  id: `vertical-tab-${index}`,
  key: `vertical-tab-${index}`,
  "aria-controls": `vertical-tabpanel-${index}`,
});

const Navigation = () => {
  const isSmallScreen = useMediaQuery(Consts.SmallScreenMediaQuery);
  const classes = useStyles();
  const [examples] = useState<Array<IExample>>(Consts.Examples);
  const [value, setValue] = React.useState<number>(0);
  const [isInProgress, setIsInProgress] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [codeSnippet, setCodeSnippet] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setCodeSnippet("");
      const currentExample = examples.find((e: IExample) => e.id === value);
      if (currentExample) {
        ReactGA.event({
          category: "Navigation",
          action: "Selected an example",
          label: currentExample.label,
        });

        if (currentExample.link) {
          setIsInProgress(true);
          setHasError(false);
          const { link } = currentExample;
          try {
            const { data: code } = await axios.get(link);
            setCodeSnippet(code);
          } catch (err) {
            setHasError(true);
            console.log("Error occured", err);
          }
          setIsInProgress(false);
        }
      }
    })();
  }, [examples, value]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    dispatch({ type: types.RESET_STATE });
    setValue(newValue);
  };

  const renderTabs = () => {
    return (
      <Tabs
        orientation={isSmallScreen ? "horizontal" : "vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Code example tabs"
        className={classes.tabs}
      >
        <Tab label="Welcome" {...createProps(0)} />
        {examples.map((example: IExample) => (
          <Tab label={example.label} {...createProps(example.id)} />
        ))}
      </Tabs>
    );
  };

  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className={classes.root}>
          {isSmallScreen ? (
            <div className={classes["tabs-border"]}>{renderTabs()}</div>
          ) : (
            renderTabs()
          )}
          <TabPanel value={value} index={0} className={classes["tab-panel"]}>
            <Welcome />
          </TabPanel>

          {examples.map((example: IExample) => (
            <TabPanel
              key={`${example.id}_${example.label}`}
              value={value}
              index={example.id}
              className={classes["tab-panel"]}
            >
              <Grid container className={classes["grid-container"]}>
                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={3}
                  xs={3}
                  className={classes["grid-item"]}
                >
                  <example.componentName />
                </Grid>
                <Grid
                  item
                  lg={9}
                  md={9}
                  sm={9}
                  xs={9}
                  className={classes["grid-item"]}
                >
                  {isInProgress ? (
                    <Loading text={"Loading code snippet from GitHub..."} />
                  ) : (
                    codeSnippet && (
                      <SyntaxHighlighter
                        language="typescript"
                        className={classes["syntax"]}
                      >
                        {codeSnippet}
                      </SyntaxHighlighter>
                    )
                  )}

                  {hasError ? <Error /> : null}
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
