import React, { useEffect } from "react";
import IExample from "../../Interfaces/IExample";
import ReactGA from "react-ga";
import Consts from "../../Consts";

interface Props {
  example: IExample;
}

const ExampleHandler = (props: Props) => {
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
      {example.componentName ? (
        <example.componentName example={example} />
      ) : (
        <p>Something went wrong</p>
      )}
    </>
  );
};

export default ExampleHandler;
