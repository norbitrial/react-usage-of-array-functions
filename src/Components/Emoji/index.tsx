import React from "react";

interface Props {
  text: string;
}

const Emoji = (props: Props) => {
  return (
    <span role="img" aria-label="emoji">
      {props.text}
    </span>
  );
};

export default Emoji;
