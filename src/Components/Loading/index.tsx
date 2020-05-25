import React from "react";
import ILoadingProps from "../../Interfaces/ILoadingProps";
import { CircularProgress } from "@material-ui/core";

const Loading = (props: ILoadingProps) => {
  const { text } = props;

  return (
    <>
      <p>
        <CircularProgress color="secondary" />
      </p>
      <p>
        <span>{text}</span>
      </p>
    </>
  );
};

export default Loading;
