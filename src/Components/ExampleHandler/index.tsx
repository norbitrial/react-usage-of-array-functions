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
    ReactGA.event({
      category: "Navigation",
      action: "Selected an example",
      label: example.label,
    });
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
