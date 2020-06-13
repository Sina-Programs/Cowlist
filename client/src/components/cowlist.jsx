import React from "react";
import Cow from "./cow";

function cows(props) {
  return (
    <div>
      {props.cows.map((cow) => (
        <Cow cow={cow} selectCurrent={props.selectCurrent} />
      ))}
    </div>
  );
}

export default cows;
