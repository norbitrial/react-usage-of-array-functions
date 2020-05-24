import React from "react";
import Emoji from "../Emoji";
import Consts from "../../Consts";

const CodeRepo = () => {
  return (
    <h4>
      Code Repository <Emoji text={"👨‍💻"} />:{" "}
      <a href={Consts.CodeRepoUrl} target="_blank" rel="noopener noreferrer">
        {Consts.CodeRepoUrl}
      </a>
    </h4>
  );
};

export default CodeRepo;
