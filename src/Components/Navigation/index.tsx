import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import useStyles from "./styles";
import Emoji from "../Emoji";
import Consts from "../../Consts";
import IExample from "../../Interfaces/IExample";
import ExampleHandler from "../ExampleHandler";

const Navigation = () => {
  const classes = useStyles();
  const [examples] = useState<Array<IExample>>(Consts.Examples);
  const [selectedExample, setSelectedExample] = useState<IExample>();

  return (
    <Grid container>
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <span>Select an example from treeview:</span>
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {examples.map((e: IExample) => (
            <TreeItem key={e.nodeId} nodeId={e.nodeId} label={e.label}>
              {e.nodes &&
                e.nodes.map((n) => (
                  <TreeItem
                    key={n.nodeId}
                    nodeId={n.nodeId}
                    label={n.label}
                    onClick={() => setSelectedExample(n)}
                  ></TreeItem>
                ))}
            </TreeItem>
          ))}
        </TreeView>
      </Grid>
      <Grid item lg={9} md={9} sm={12} xs={12}>
        {selectedExample ? (
          <ExampleHandler example={selectedExample} />
        ) : (
          <>
            <Emoji text={"👈"} /> Select an example first from tree view
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Navigation;
