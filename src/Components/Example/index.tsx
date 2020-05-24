import React, { useEffect } from "react";
import IExample from "../../Interfaces/IExample";
import { TextField } from "@material-ui/core";
import ReactGA from "react-ga";
import Consts from "../../Consts";

interface Props {
  example: IExample;
}

const Example = (props: Props) => {
  const { example } = props;

  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      ReactGA.event({
        category: "Navigation",
        action: "Selected an example",
        label: example.label,
      });
    } else {
      console.log(`No GA Tracking on localhost for ${Consts.GATrackingId}`);
    }
  }, [example.label]);

  return (
    <>
      <p>Code snippet from github:</p>
      {example.label}
      <p>
        <TextField id="standard-basic" label="Name" />
      </p>
      {/*
        Consts array should have the component itself FilterExample as a property
        Separate components for each examples
      */}
    </>
  );
};

export default Example;
